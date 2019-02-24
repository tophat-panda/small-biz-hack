import React, { Component } from 'react';
import Phonemodal from "../components/phonemodal"
import Dbsidebar from "../components/dbsidebar"




class Dashboardpg extends Component {
  render() {
    return (
      <div className="dashboard">

      <div className="db-sidebar">
        <Dbsidebar />
      </div>

      <div className="phonemodal-container">
      <Phonemodal />
      </div>
      </div>
    );
  }
}

export default Dashboardpg;
