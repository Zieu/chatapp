import React from "react";
import { TopBar } from "./TopBar";
import { Messages } from "./Messages";
import { MessageInput } from "./MessageInput";
const Chat = () => {
  return (
    <div className="chat">
      <TopBar />
      <Messages />
      <MessageInput />
    </div>
  );
};

export default Chat;
