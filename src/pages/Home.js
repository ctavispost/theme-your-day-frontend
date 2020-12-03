import React, { Component } from 'react';
import ThemeModel from '../models/theme';

import { Link } from 'react-router-dom';
import ThemeCard from '../components/ThemeCard';

class Home extends Component {
  state = {
    themes: []
  };

  componentDidMount() {
    this.fetchData()
  };
  
  fetchData = () => {
    ThemeModel.all()
      .then(data => {
        console.log(data);
        this.setState({ themes: data.themes })
    })
          .catch(error => alert(error.message));
  }

  render() {
    console.log(this.state);
    let themeList = this.state.themes.map((theme, index) => {
      return (
        <Link to={{
          pathname: `/theme/${ theme.id}`,
          state: {
            themeId: theme.id
          }
          }} key={index}>
          <ThemeCard  {...theme} />
        </Link>
      )
    });

    return (
      <article>
        <h1 className="hero logo">Theme Your Day</h1>
        <section className="gridy gap-one-rem gridAutoCol">
          { this.state.themes ? themeList : 'Loading...' }
        </section>
      </article>
    );
  }
}

export default Home;
