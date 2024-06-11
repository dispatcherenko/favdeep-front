import style from "./RegistrationCard.module.scss";

const RegistrationCard = (props) => {
  return (
    <div className={style.card + " " + props.className}>{props.children}</div>
  );
};

export default RegistrationCard;
