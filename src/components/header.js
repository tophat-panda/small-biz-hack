import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ActiveCall from "./activecall";
import logoSvg from "../img/panda.svg";

class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <Link to="/">
              <img src={logoSvg} alt="logo" />
            </Link>
          </div>

          <nav>
            <ul className="nav-items">
              {this.props.callInProgress ? (
                <ActiveCall />
              ) : (
                <Fragment>
                  <li>
                    <Link to="/register" className="nav-link">
                      Logout
                    </Link>
                  </li>
                </Fragment>
              )}
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default connect(state => ({
  callInProgress: state.call_in_progress
}))(Header);
