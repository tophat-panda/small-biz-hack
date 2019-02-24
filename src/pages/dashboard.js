<<<<<<< HEAD
import React, { Component } from 'react';
import Phonemodal from "../components/phonemodal"
import Dbsidebar from "../components/dbsidebar"



=======
import React, { Component } from "react";
import Phonemodal from "../components/phonemodal";
import { connect } from "react-redux";
>>>>>>> 0e100afe90d3529be0d0eff9256d92947e7b49aa

class Dashboardpg extends Component {
  render() {
    return (
      <div className="dashboard">
<<<<<<< HEAD

      <div className="db-sidebar">
        <Dbsidebar />
      </div>

      <div className="phonemodal-container">
      <Phonemodal />
=======
        <Phonemodal
          incomingCall={this.props.incoming_call}
          callInProgress={this.props.call_in_progress}
        />
>>>>>>> 0e100afe90d3529be0d0eff9256d92947e7b49aa
      </div>
      </div>
    );
  }
}

export default connect(state => ({
  incoming_call: state.incoming_call,
  call_in_progress: state.call_in_progress
}))(Dashboardpg);
