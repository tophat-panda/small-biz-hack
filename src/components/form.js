import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// PRODUCT COMPONENT ---- Where The state has gone -
class Form extends Component {
  render() {
    return (
      <form>
        <div id="login-username" className="formcontainer">
          <label htmlFor="user">
            Username <FontAwesomeIcon icon="user" />
          </label>
          <input id="user" type="text" placeholder="username" />
        </div>

        <div id="login-password" className="formcontainer">
          <label htmlFor="password">
            Password <FontAwesomeIcon icon="lock" />
          </label>
          <input id="password" type="password" placeholder="password" />
        </div>

        <div className="formcontainer">{/* button component here */}</div>
      </form>
    );
  }
}

export default Form;
