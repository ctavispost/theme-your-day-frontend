import React, { Component } from 'react';
import ThemeModel from '../models/theme';
import ActModel from '../models/activity';
import ThemeCard from '../components/ThemeCard';
import ActCard from '../components/ActCard';
import ThemeActModel from '../models/themeAct';

/* get theme acts and filter by user id */
const getThemeActs = async () => {
    await ThemeActModel.allThemeActs()
        .then(allTa => {
          return(
            allTa.filter(themeAct => themeAct.themeId === this.props.match.params.id)
          )
            .catch(error => alert(error.message))
      })
  };

const getActs = async () => {
    await ActModel.allActs()
      .then(allActivities => {
        return (allActivities)
      })
        .catch(error => alert(error.message))
};

class ShowTheme extends Component {
  state = {
    activities: [],
    currentTheme: this.props.match.params.id
  }

  componentDidMount() {
    this.getActivities()
  }

  getActivities = () => {
    let themeActs = getThemeActs();
    let acts = getActs();
    let actIds = new Set(themeActs.map(v => v.actId));
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