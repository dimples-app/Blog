import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./Topbar.css";


function Topbar() {
    const user = true;
    return (
        <div className="top">
            <div className="topRight"> 
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>

            <div className="topCenter">
                    <ul className="topList">
                        
                        <li className="topListItem">
                           <Link className="link" to="/">
                               Home
                            </Link> 
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/">
                                About
                            </Link>
                        </li>
                        <li className="topListItem">
                            Contact
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/write">
                                Write
                            </Link>  
                        </li>
                        {
                        user && 
                        <li className="topListItem">
                            Logout
                            </li>
                        }
                </ul>
            </div>
        
            <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/2873473/pexels-photo-2873473.jpeg?cs=srgb&dl=pexels-david-bartus-2873473.jpg&fm=jpg"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

            <i className="topSearchIcon fas fa-search"></i>
        </div>
            
        </div>
    )
}

export default Topbar
