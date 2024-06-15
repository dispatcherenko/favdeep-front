import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";

const MessageFactory = (props) => {
  switch (props.type) {
    case "user":
      return <UserMessage {...props} />;
    case "bot":
      return <BotMessage {...props} />;
    default:
      return <UserMessage {...props} />;
  }
};

export default MessageFactory;
