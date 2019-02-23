import React, { Component } from 'react';
import Main from '../components/main';

class RegisterPg extends Component {
  render() {
    return (
      <div className="page">
        <h1>REGISTER PAGE</h1>
        <Main headingTitle="this is heading title im passing to main component" />
      </div>
    );
  }
}
export default RegisterPg;
