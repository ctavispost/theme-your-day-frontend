import React from 'react';
import ActModel from '../models/activity';
import UserActModel from '../components/userAct';
import ActCard from '../components/ActCard';

/* get theme acts and filter by user id */
const getUserActs = async () => {
  await UserActModel.allUserActs()
      .then(allUa => {
        return(
          allUa.filter(userAct => userAct.userId === this.props.currentUser)
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

class Profile extends Component {
  state = {
    activities: []
  }

  componentDidMount() {
    this.getActivities()
  }

  getActivities = () => {
    let userActs = getUserActs();
    let acts = getActs();
    let actIds = new Set(userActs.map(v => v.actId));
    let foundActs = acts.filter(v => actIds.has(v));
    this.setState({activities: foundActs});
  }

  render() {
    let actList = this.state.activities.map((activity, index) => {
      return (<ActCard {...this.state.activities} />)
    })

    return (
      <main>
        <h1>Your Activities</h1>
        <article>
            { this.state.activities ? actList : 'Loading...' }
        </article>
      </main> 
    )
  }
}

export default Profile