import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
              <h1>TOPHAT PANDA</h1>
            </Link>
          </div>

          <nav>
            <ul className="nav-items">
              <li>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
