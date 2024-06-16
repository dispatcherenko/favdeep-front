import { useState } from "react";
import Chat from "../../components/Chat/Chat";
import "./ChatWithBot.scss";

const ChatWithBot = () => {
  const [category, setCategory] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 0,
      type: "bot-select",
      text: `Здравствуйте, я ваш умный помощник в сфере инверстирования, выберите категорию, или задайте вопрос.`,
      buttons: [
        {
          id: 4,
          name: "ОЭЗ/Технопарк",
          type: "setCategory",
        },
        {
          id: 3,
          name: "Помещения и сооружения",
          type: "setCategory",
        },
        {
          id: 5,
          name: "РМП",
          type: "setCategory",
        },
      ],
    },
  ]);

  return (
    <div className="chat">
      <Chat
        messages={messages}
        setMessages={setMessages}
        category={category}
        setCategory={setCategory}
      />
    </div>
  );
};

export default ChatWithBot;
