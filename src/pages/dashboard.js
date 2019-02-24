import React, { Component } from "react";
import Phonemodal from "../components/phonemodal";
import Dbsidebar from "../components/dbsidebar";
import { connect } from "react-redux";

class Dashboardpg extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="db-sidebar">
          <Dbsidebar />
        </div>

        <div className="phonemodal-container">
          <Phonemodal
            incomingCall={this.props.incoming_call}
            callInProgress={this.props.call_in_progress}
          />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  incoming_call: state.incoming_call,
  call_in_progress: state.call_in_progress
}))(Dashboardpg);
