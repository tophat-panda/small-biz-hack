import React, { Component } from 'react';
import Form from '../components/form';
// import axios from 'axios';

class Main extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    // axios.get(`http://localhost:3000/data.json`)
    //     .then(res => {
    //         const data = res.data;
    //         this.setState({ data });
    //     })
  }

  render() {
    return (
      <div className="container">
        <Form />
      </div>
    );
  }
}
export default Main;
