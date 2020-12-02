import React, { Component } from 'react';
import ActModel from '../models/activity';
import ThemeCard from '../components/ThemeCard';
import ActCard from '../components/ActCard';
import ThemeActModel from '../models/themeAct';

/* get theme acts and filter by user id */
const getThemeActs = async () => {
  const allTa = await ThemeActModel.allThemeActs();
  return
    allTa.themeActs.filter(themeAct => themeAct.themeId === this.props.match.params.id);
};

const getActs = async () => {
    const allActivities = await ActModel.allActs();
    return allActivities;
};

class ShowTheme extends Component {
  state = {
    activities: [],
    currentTheme: this.props.match.params.id
  }

  componentDidMount() {
    this.getActivities()
  }

  getActivities = async () => {
    let themeActs = await getThemeActs();
    console.log(themeActs);
    let acts = getActs();
    let actIds = new Set(themeActs.map(v => v.activityId));
    let foundActs = acts.filter(v => actIds.has(v));
    this.setState({activities: foundActs});
  }
  
  render() {
    let actList = this.state.activities.map((activity, index) => {
      return (<ActCard {...this.state.activities} />)
    })

    return (
      <main>
        <ThemeCard { ...this.state.currentTheme }/>
        <article>
          { this.state.activities ? actList : 'Loading...' }
        </article>
      </main>
    )
  }
}

export default ShowTheme;