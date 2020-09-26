import React from "react";
import { TopBar } from "./TopBar";
import { Messages } from "./Messages";
import { MessageInput } from "./MessageInput";
import { InputProvider } from "./InputContext";
const Chat = () => {
  return (
    <InputProvider>
      <div className="chat">
        <TopBar />
        <Messages />
        <MessageInput />
      </div>
    </InputProvider>
  );
};

export default Chat;
