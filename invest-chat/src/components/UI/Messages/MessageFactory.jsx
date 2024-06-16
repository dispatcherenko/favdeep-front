import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import style from "./Messages.module.scss";
import ButtonFactory from "../Buttons/Buttons";

const MessageFactory = (props) => {
  const onClickHandler = (item) => {
    switch (item.type) {
      case "setCategory": {
        props.getFilters(item.id);
        break;
      }
      case "setFilter": {
        props.getChoices(item.id, item.filter_name);
        break;
      }
      case "apply": {
        props.applyFilter(item.id, item.filter_name, item.value);
        break;
      }
      default: {
        return "";
      }
    }
  };

  switch (props.type) {
    case "user":
      return <UserMessage {...props} />;
    case "bot":
      return <BotMessage {...props} />;
    case "bot-select":
      return (
        <div className={style.bot}>
          <span>{props.text}</span>
          <div className={style.bot__buttons}>
            {props.buttons.map((item) => {
              return (
                <ButtonFactory
                  type="white"
                  onClick={() => onClickHandler(item)}
                >
                  {item.name}
                </ButtonFactory>
              );
            })}
            {props.category !== "" ? (
              <ButtonFactory type="white" onClick={props.setToCategory}>
                Мне не подходит ни один из фильтров.
              </ButtonFactory>
            ) : (
              <></>
            )}
          </div>
        </div>
      );
    default:
      return <UserMessage {...props} />;
  }
};

export default MessageFactory;
