import React from "react";
import Logo from "./../img/friends.png";

const Header = () => {
    return <header className="header">
    <div> 
    <a href="#s">   
      <img
        className="logo"
        src={Logo}
        alt="together"
      />
    </a>
    <span>together</span>
    </div>
  </header>
}

export default Header;
