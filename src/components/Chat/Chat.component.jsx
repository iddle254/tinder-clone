import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

import "./chat.styles.css";

function Chat({ name, message, timestamp, profilePic }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" alt={name} src={profilePic} />
        <div className="chat__message">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
