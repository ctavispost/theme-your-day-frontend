import React, { Component } from 'react';
import ActModel from '../models/activity';

class NewAct extends Component {
    initialState = {
        title: '',
        description: '',
        image: '',  
    };

    state = initialState;

    handleSubmit = (event) => {
        event.preventDefault();

        ActModel.createAct(this.state)
            .then(data => {
                this.props.history.push('/profile')
            })
                .catch(error => alert(error.message));
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
        <section>
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

            <input type="submit" value="Create"/>
            </form>
        </section>
        );
    }
}

export default NewAct;
