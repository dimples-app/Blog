import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
        <span className="headerTitleSm">Welcome to my BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/235734/pexels-photo-235734.jpeg?cs=srgb&dl=pexels-pixabay-235734.jpg&fm=jpg"
        alt=""
      />
        </div>
    )
}

export default Header
