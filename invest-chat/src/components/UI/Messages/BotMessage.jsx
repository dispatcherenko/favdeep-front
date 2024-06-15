import style from "./Messages.module.scss";

const BotMessage = (props) => {
  return (
    <div className={style.bot}>
      <span>{props.text}</span>
    </div>
  );
};

export default BotMessage;
