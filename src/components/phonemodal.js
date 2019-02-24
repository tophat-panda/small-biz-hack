import React, { Component } from "react";
import Answerphone from "./answerphone";
import Endphone from "./endphone";
import Activephonenum from "./activephonenum";
import Phonetype from "./phonetype";
import { connect } from "react-redux";

class Phonemodal extends Component {
  render() {
    if (!this.props.incomingCall) {
      return null;
    }
    return (
      <div className="phonemodal">

        <Activephonenum />
        <Phonetype />
        <Answerphone onClick={this.props.answer} />
        <Endphone onClick={this.props.reject} />
      </div>
    );
  }
}

export default connect(
  undefined,
  dispatch => ({
    answer: () => dispatch({ type: "ANSWER_CALL" }),
    reject: () => dispatch({ type: "REJECT_CALL" })
  })
)(Phonemodal);
