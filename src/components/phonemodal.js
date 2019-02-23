import React, { Component } from 'react';
import Answerphone from "./answerphone";
import Endphone from "./endphone";
import Activephonenum from "./activephonenum";

class Phonemodal extends Component {
  render() {
    return (
      <div>

        <Activephonenum />
        <Answerphone />
            <Endphone />

      </div>
    );
  }
}

export default Phonemodal;
