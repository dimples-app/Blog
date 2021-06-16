import React from 'react'
import "./Topbar.css"

function Topbar() {
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
                            Home
                        </li>
                        <li className="topListItem">
                            About
                        </li>
                        <li className="topListItem">
                            Contact
                        </li>
                        <li className="topListItem">
                            Write
                        </li>
                        <li className="topListItem">
                            Logout
                        </li>
                </ul>
            </div>

            <div className="topLeft">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/2873473/pexels-photo-2873473.jpeg?cs=srgb&dl=pexels-david-bartus-2873473.jpg&fm=jpg" 
              alt="topimage"
            />
            <i className="topSearchIcon fas fa-search"></i>
            </div>
            
        </div>
    )
}

export default Topbar
