import React, { useState } from "react";
import "./Chatscreen.styles.css";
import { Avatar } from "@material-ui/core";

const Chatscreen = () => {
  const [messages, setMessages] = useState([
    {
      message: "What's up 💑 ",
    },
    {
      name: "Megan",
      image:
        "https://images.unsplash.com/photo-1541760866956-dcad73131a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      message: "Wanna link up? ",
    },
    {
      message: "Sure.. bet⏲  ",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatscreen">
      <p className="chatscreen__timestamp">
        You matched with Megan on 12/06/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatscreen__message">
            <Avatar
              className="chatscreen__icon"
              alt={message.name}
              src={message.image}
            />

            <p className="chatscreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatscreen__message">
            <p className="chatscreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatscreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="chatscreen__inputField"
          type="text"
          name=""
          id=""
        />
        <button
          onClick={handleSend}
          className="chatscreen__button"
          type="submit"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default Chatscreen;
