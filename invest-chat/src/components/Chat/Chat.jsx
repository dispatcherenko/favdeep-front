import MessageFactory from "../UI/Messages/MessageFactory";
import ButtonFactory from "../UI/Buttons/Buttons";
import axios from "axios";
import "./Chat.scss";
import { useState } from "react";

const Chat = (props) => {
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [toCategory, setToCategory] = useState(false);

  const onInputChanged = (e) => {
    setNewMessage(e.target.value);
  };

  const getFilters = async (id) => {
    setIsLoading(true);
    try {
      const request = {
        answer: id,
        prev_filters: {},
      };
      const response = await axios.post(
        "https://ai-assistent-backend.onrender.com/api/ai/get_filters",
        request
      );
      console.log(response.data);
      const userMessage = {
        id: props.messages.length + 1,
        type: "bot-select",
        buttons: response.data.map((item) => {
          item.id = id;
          item.type = "setFilter";
          return item;
        }),
      };
      props.setMessages([...props.messages, userMessage]);
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getChoices = async (id, filter) => {
    try {
      const response = await axios.post(
        "https://ai-assistent-backend.onrender.com/api/ai/get_choices",
        {
          answer: id,
          prev_filters: {},
          filter_name: filter,
        }
      );
      const userMessage = {
        id: props.messages.length + 1,
        type: "bot-select",
        buttons: response.data.map((item) => {
          item.id = id;
          item.type = "apply";
          item.filter_name = filter;
          item.name = item.display;
          return item;
        }),
      };
      props.setMessages([...props.messages, userMessage]);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const applyFilter = async (id, filter, value) => {
    try {
      const response = await axios.post(
        "https://ai-assistent-backend.onrender.com/api/ai/apply_filter",
        {
          answer: id,
          filters: { [filter]: value },
        }
      );
      const parsedNames = response.data.top_10.map((item) => {
        return item.name + "\n";
      });
      const userMessage = {
        id: props.messages.length + 1,
        type: "bot",
        text:
          "Найдено " +
          response.data.count +
          " вариантов по вашему запросу, вот " +
          response.data.top_10.length +
          " из них " +
          parsedNames,
      };
      props.setMessages([...props.messages, userMessage]);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const sendMessage = async () => {
    if (newMessage) {
      const userMessage = {
        id: props.messages.length,
        type: "user",
        text: newMessage,
      };
      props.setMessages([...props.messages, userMessage]);

      setNewMessage("");
      setIsLoading(true);

      try {
        if (!toCategory) {
          const response = await axios.post(
            "https://ai-assistent-backend.onrender.com/api/ask/",
            {
              message: newMessage,
            }
          );

          const botMessage = {
            id: props.messages.length + 1,
            type: "bot",
            text: response.data.response,
          };

          props.setMessages([...props.messages, userMessage, botMessage]);
        } else {
          // Отправляем запрос к API с message и category
          const response = await axios.post(
            "https://ai-assistent-backend.onrender.com/api/ask/category/",
            {
              message: newMessage,
              category: props.category,
            }
          );

          const botMessage = {
            id: props.messages.length + 1,
            type: "bot",
            text: response.data.response.join(", "),
          };

          props.setMessages([...props.messages, userMessage, botMessage]);
        }
      } catch (error) {
        console.error("Ошибка при отправке сообщения:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      props.setMessages([
        ...props.messages,
        {
          id: props.messages.length,
          type: "bot",
          text: "Вы ничего не написали.",
        },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const modeChanged = () => {
    setToCategory(true);
    props.setMessages([
      ...props.messages,
      {
        id: props.messages.length,
        type: "bot",
        text: "Спрашивайте, я постараюсь помочь вам.",
      },
    ]);
  };

  return (
    <>
      <p className="chat__label">Онлайн помощник</p>
      <div className="chat__messages">
        {props.messages.map((item) => (
          <MessageFactory
            type={item.type}
            text={item.text}
            key={item.id}
            setCategory={props.setCategory}
            buttons={item.buttons}
            getChoices={getChoices}
            getFilters={getFilters}
            applyFilter={applyFilter}
            setToCategory={modeChanged}
          ></MessageFactory>
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
            onKeyDown={handleKeyDown}
          />
          <ButtonFactory
            type="submit"
            className="chat__message-button"
            onClick={sendMessage}
            disabled={isLoading}
          >
            {isLoading ? "Отправка..." : "Отправить"}
          </ButtonFactory>
        </div>
      </div>
    </>
  );
};

export default Chat;
