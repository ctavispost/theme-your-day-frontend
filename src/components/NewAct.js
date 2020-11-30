import React, { Component } from 'react';
import ActModel from '../models/activity';
import UserActModel from '../models/userAct';

class NewAct extends Component {
    state = {
        title: '',
        description: '',
        image: '',  
    };


    /* create a new act from state, and create a new userAct w same id */
    handleSubmit = (event) => {
        event.preventDefault();

        let newActId = null;
        ActModel.allActs()
            .then(data => newActId = data.length + 1);
        let newUserAct = {
                userId: this.props.currentUser, 
                actId: newActId};
        UserActModel.createUserAct()
            .then(data => {
                ActModel.createAct(this.state)
                    .then(data => {
                        this.props.history.push('/profile')
                    })
                        .catch(error => alert(error.message));
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
