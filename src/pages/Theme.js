import React, { Component } from 'react';
import ThemeModel from '../models/theme';
import ActModel from '../models/activity';
import ThemeCard from '../components/ThemeCard';
import ActCard from '../components/ActCard';
import ThemeActModel from '../models/themeAct';

class ShowTheme extends Component {
  state = {
    activities: [],
    currentTheme: this.props.match.params.id
  }

  componentDidMount() {
    this.getActivity()
  }

  getThemeAct = () => {
    return(
      ThemeActModel.allThemeActs()
        .then(allTa => {
          allTa.filter(themeAct => themeAct.themeId === this.state.currentTheme)
      })
    )
  }

  getActNum = (themeAct) => {
    let nums = [];
    themeAct.forEach(act => nums.push[act.actId]);
    return nums;
  }

  getAct = (actIds) => {
    return(
      ActModel.allActs()
        .then(allActivities => {
          allActivities.filter(element => actIds.includes(element.id))
          })
            .catch(error => alert(error.message))
    );
  };
  
  getActivity = () => {
    getThemeAct()
      .then(themeActs => {
        getAct(themeActs)
          .then(foundActs => {
            this.setState({ activities: foundActs.activities })
          })
            .catch(error => alert(error.message))
      })
      .catch(error => alert(error.message))
  };

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