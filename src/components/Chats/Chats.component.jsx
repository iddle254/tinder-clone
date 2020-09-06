import React from "react";
import Chat from "../Chat/Chat.component";

const Chats = () => {
  return (
    <div>
      <h1>chats</h1>
      <Chat
        name="Megan"
        message="sure...bet"
        timestamp="1 day a go"
        profilePic="..."
      />
    </div>
  );
};

export default Chats;
