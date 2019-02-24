import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import { connect } from "react-redux";
import CustomersDashboard from "./dashboard-customers";
import SettingsDashboard from "./dashboard-settings";
import Phonemodal from "../components/phonemodal";
import Dbsidebar from "../components/dbsidebar";

class Dashboardpg extends Component {
  render() {
    return (
      <div className="dashboard">
        <Dbsidebar />

        <div className="dashboard-contents">
          <Switch>
            <Redirect exact from="/dashboard" to="/dashboard/customers" />
            <Route
              exact
              path="/dashboard/customers"
              component={CustomersDashboard}
            />
            <Route
              exact
              path="/dashboard/settings"
              component={SettingsDashboard}
            />
          </Switch>
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
