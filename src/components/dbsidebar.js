import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Dbsidebar extends Component {
  render() {
    return (
      <ul className="db-sidebar">
        <li>
          <NavLink to="/dashboard/customers" activeClassName="active">
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/orders" activeClassName="active">
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/products" activeClassName="active">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/settings" activeClassName="active">
            Settings
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Dbsidebar;
