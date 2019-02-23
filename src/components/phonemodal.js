import React, { Component } from 'react';
import Answerphone from "./answerphone";
import Endphone from "./endphone";
import Activephonenum from "./activephonenum";
import Phonetype from "./phonetype";


class Phonemodal extends Component {
  render() {
    return (
      <div>

        <Activephonenum />
        <Phonetype />
        <Answerphone />
            <Endphone />

      </div>
    );
  }
}

export default Phonemodal;
