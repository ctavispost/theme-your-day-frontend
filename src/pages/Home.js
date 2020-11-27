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
    ThemeModel.all().then(data => {
      this.setState({ themes: data.theme })
    });
  }

  render() {
    let themeList = this.state.themes.map((theme, index) => {
      return (
        <Link to={`/theme/${ theme.id }`} key={index}>
          <ThemeCard  {...theme} />
        </Link>
      )
    });

    return (
      <div>
        <h1 className="hero">Theme Your Day</h1>
        { this.state.themes ? themeList : 'Loading...' }
      </div>
    );
  }
}

export default Home;
