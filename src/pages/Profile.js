import React, { Component } from 'react';
import ActModel from '../models/activity';
import UserActModel from '../models/userAct';
import ActCard from '../components/ActCard';
import NewAct from '../components/NewAct';

/* get theme acts and filter by user id */

class Profile extends Component {
  state = {
    activities: []
  }

  componentDidMount() {
    this.getActivities()
  }

  getUserActs = async () => {
    const allUa = (await UserActModel.allUserActs()).userActs;
    
    if(allUa.length > 0) {
      
      const allUacts = allUa.filter(userAct => userAct.userId === Number(this.props.currentUser));
      
      return allUacts;
    }
    return [];
  };

  getActs = async () => {
    return (await ActModel.allActs()).activity;
  };
  

  getActivities = async () => {
    let userActs = await this.getUserActs();
    let acts = await this.getActs();
    
    if (userActs.length > 0) {
      let actIds = new Set(userActs.map(v => v.activityId));
      let foundActs = acts.filter(v => actIds.has(v.id));
      this.setState({activities: foundActs});
  
    }
  }

  addNewActivity = (activity) => {
    this.setState({activities: [...this.state.activities, activity]});
  }

  deleteActivity = (index) => {
    this.setState({activities: this.state.activities.filter((v, i)=> i !== index)})
  }

  render() {
    let actList = this.state.activities.map((activity, index) => {
      return (<ActCard {...activity} key={activity.id} onDelete={() => this.deleteActivity(index)}/>)
    })

    return (
      <main>
        <h1>Your Activities</h1>
        <article>
            { this.state.activities ? actList : 'Loading...' }
        </article>
        <NewAct onSubmit={activity => this.addNewActivity(activity)}/>
      </main> 
    )
  }
}

export default Profile