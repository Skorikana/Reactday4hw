import React from "react";
import { Link } from "react-router-dom";

export default function Nav (){
  return (
    <div className="nav">
      <Link to="/">
        <div>HOME</div>
      </Link>
      <Link to="/about">
        <div>ABOUT</div>
      </Link>
      <Link to="/Dashboard">
          <div>DASHBOARD</div>
        </Link>
          </div>
         
  );
};