import React, { Component, Fragment } from "react";
import formatDuration from "format-duration";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Endphone from "./endphone";

class ActiveCall extends Component {
  state = {
    duration: 0
  };
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ duration: new Date() - this.props.callStarted });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <Fragment>
        <li>
          <p className="format-duration">
            {formatDuration(this.state.duration)}
          </p>
        </li>
        <li>
          <Endphone onClick={this.props.reject} />
        </li>
        <li>
          <Link
            to="/dashboard/customer/5c720df9158ab7231880842c"
            className="nav-link"
          >
            View customer
          </Link>
        </li>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    callStarted: state.call_started
  }),
  dispatch => ({
    reject: () => dispatch({ type: "REJECT_CALL" })
  })
)(ActiveCall);
