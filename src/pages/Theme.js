import React, { Component } from 'react';
import ActModel from '../models/activity';
import ThemeCard from '../components/ThemeCard';
import ActCard from '../components/ActCard';
import UserActModel from '../models/userAct';

class ShowTheme extends Component {
  state = {
    activities: []
  }

  componentDidMount() {
    this.getActs();
  }

  getActs = async () => {
    const allActivities = await ActModel.allActs();
    const { themeId } = this.props.location.state;
    console.log(allActivities);
    console.log(themeId);
    let foundActs = allActivities.activity.filter(act => act.themeId === themeId);
    this.setState({activities: foundActs});
  }
  
  addFavoriteActivity = async (activity) => {
    console.log(activity);
    const newFavorite = UserActModel.createUserAct(activity);

  };

  render() {
    let actList = this.state.activities.map((activity, index) => {
      return (<ActCard {...activity} onFavorite={() => this.addFavoriteActivity(activity)}/>)
    })

    return (
      <main>
        <ThemeCard { ...this.props.location.state.themeId }/>
        <article>
          { this.state.activities ? actList : 'Loading...' }
        </article>
      </main>
    )
  }
}

export default ShowTheme;