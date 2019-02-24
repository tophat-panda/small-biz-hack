import React from 'react';
import { Link } from "react-router-dom";
import HomeText from '../components/hometext';
import logoSvg from "../img/panda.svg";


function homepg() {
  return (

    <div className="homepage-overlay">


              <div className="logo-large">
            <Link to="/dashboard">
              <img src={logoSvg} alt="logo" />
            </Link>
          </div>

{/*
    <div className="page">
      <p>THIS IS THE HOME PAGE... Add what you want here</p>
      <HomeText headingTitle="titleofsection" />
    </div> */}

    </div>



  );
}
export default homepg;
