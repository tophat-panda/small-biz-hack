import React, { Component } from 'react';

// PRODUCT COMPONENT ---- Where The state has gone -
class Form extends Component {
  render() {
    return (
      <form>
        <label>
          User Name:
          <input type="text" name="username" />
        </label>

        <label>
          Password:
          <input type="password" name="password" />
        </label>

        {/* BUTTON COMPONENT HERE */}
      </form>
    );
  }
}

export default Form;
