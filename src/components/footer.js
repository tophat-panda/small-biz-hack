import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        This is the footer of my App. copyright &copy; {this.props.date}
      </footer>
    );
  }
}

export default Footer;
