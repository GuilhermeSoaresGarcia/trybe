import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <>
        <h2>HOME</h2>
        <Link to="/login">Login</Link>
      </>
    );
  }
};

export default Home;
