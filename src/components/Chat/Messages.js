import React from "react";
import { Message } from "./Message";

import { messages } from "./localMsgs";

export const Messages = () => {
  return (
    <div className="messages">
      {messages.map((msg) => (
        <Message
          content={msg.content}
          author={msg.author}
          time={msg.time}
          msgOwner={msg.msgOwner}
          key={msg.msgId}
        />
      ))}
    </div>
  );
};
