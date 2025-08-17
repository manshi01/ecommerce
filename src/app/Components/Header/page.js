'use client'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
function Header({resData}) {
  const [btn,setbtn]=useState("Login")
const [searchText,setsearchtext]=useState("")
  return (
    <>
      <div className="container">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
     <li className="nav-item">
  <button
    className="nav-link"
    onClick={() => setbtn(btn === "Login" ? "Logout" : "Login")}
  >
    {btn}
  </button>
</li>
    </ul>
    <input type="text" className="search-box" value={searchText}
    onChange={(e)=>{
      setsearchtext(e.target.value)
    }}/>
  </div>
</nav>
</div>
    </>
  );
} 

export default Header;
