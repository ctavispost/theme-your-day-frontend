import React, { Component } from 'react';
import ActModel from '../models/activity';

class NewAct extends Component {
    state = {
        title: '',
        description: '',
        image: ''  
    };


    /* create a new act from state, and create a new userAct w same id */
    handleSubmit = async (event) => {
        event.preventDefault();
        let newActivity = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
        };

        this.setState({
            title: '',
            description: '',
            image: ''
        });

        this.props.onSubmit(await ActModel.createAct(newActivity));
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
        <section className="margTwoRem">
            <h2>Create a New Activity</h2>
            <form onSubmit={this.handleSubmit}>
            <div className="form-input">
                <label htmlFor="title">Title</label>
                <input 
                type="text" 
                name="title" 
                onChange={this.handleChange}
                value={this.state.title} />
            </div>
            <div className="form-input">
                <label htmlFor="description">description</label>
                <input 
                type="text" 
                name="description" 
                onChange={this.handleChange}
                value={this.state.desciption} />
            </div>
            <div className="form-input">
                <label htmlFor="image">Image URL</label>
                <input 
                type="text" 
                name="image" 
                onChange={this.handleChange}
                value={this.state.image} />
            </div>

            <input type="submit" value="Create" className="btn"/>
            </form>
        </section>
        );
    }
}

export default NewAct;
