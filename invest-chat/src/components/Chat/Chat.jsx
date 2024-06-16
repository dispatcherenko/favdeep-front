import MessageFactory from "../UI/Messages/MessageFactory";
import ButtonFactory from "../UI/Buttons/Buttons";
import "./Chat.scss";
import { useState } from "react";

const Chat = (props) => {
  const [newMessage, setNewMessage] = useState("");

  const onInputChanged = (e) => {
    setNewMessage(e.target.value);
  };

  const sendMessage = (e) => {
    props.setMessages([
      ...props.messages,
      { id: props.messages.length, type: "user", text: newMessage },
    ]);
    setNewMessage("");
  };

  return (
    <>
      <p className="chat__label">Онлайн помощник</p>
      <div className="chat__messages">
        {props.messages.map((item) => (
          <MessageFactory type={item.type} text={item.text} key={item.id} />
        ))}
      </div>
      <div className="chat__message-input-wrapper">
        <label>Задай свой вопрос</label>
        <div className="chat__message-input-box">
          <input
            className="chat__message-input"
            type="text"
            placeholder="Введите запрос"
            value={newMessage}
            onChange={onInputChanged}
          />
          <ButtonFactory
            type="submit"
            className="chat__message-button"
            onClick={(e) => {
              sendMessage(e.target.content);
            }}
          >
            Отправить
          </ButtonFactory>
        </div>
      </div>
    </>
  );
};

export default Chat;
