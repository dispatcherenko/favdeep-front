import style from "./Messages.module.scss";

const UserMessage = (props) => {
  return (
    <div className={style.user}>
      <span>{props.text}</span>
    </div>
  );
};

export default UserMessage;
