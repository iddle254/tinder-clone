import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import "./header.styles.css";

function Header({ backButton }) {
  return (
    <div className="header">
      {backButton ? (
        <Link to="/">
          <IconButton>
            <ArrowBackIosIcon fontSize="large" className="header__icon" />
          </IconButton>
        </Link>
      ) : (
        <IconButton>
          <AccountCircleIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt=""
        />
      </Link>

      <Link to="/chats">
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
