import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import "./header.styles.css";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <AccountCircleIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt=""
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
