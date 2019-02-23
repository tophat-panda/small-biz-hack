import React, { Component } from 'react';
import Main from '../components/main';

class Loginpg extends Component {
  render() {
    return (
      <div className="page">
        <h1>LOGIN</h1>
        <Main headingTitle="this is heading title im passing to main component" />
      </div>
    );
  }
}
export default Loginpg;
