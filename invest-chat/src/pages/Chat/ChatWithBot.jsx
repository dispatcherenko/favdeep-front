import { useState } from "react";
import Chat from "../../components/Chat/Chat";
import "./ChatWithBot.scss";

const ChatWithBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 0,
      type: "bot",
      text: "Здравствуйте, я ваш умный помощник в сфере инверстирования, чем я могу вам помочь?",
    },
  ]);

  return (
    <div className="chat">
      <Chat messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default ChatWithBot;
