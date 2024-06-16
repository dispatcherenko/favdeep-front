import "../UserInfo.scss";
import ButtonFactory from "../../../../UI/Buttons/Buttons";

const Info = (props) => {
  return (
    <div className="user-info__info">
      <div className="user-info__info-right">
        <p className="user-info__text">{props.user}</p>
        <p className="user-info__text">{props.user}</p>
        <p className="user-info__text">{props.user}</p>
        <ButtonFactory
          className="user-info__button"
          type="white"
          onClick={() =>
            props.setIsChanging((prev) => {
              return { ...prev, info: true };
            })
          }
        >
          Изменить ваши данные
        </ButtonFactory>
      </div>
      <div className="user-info__info-left">
        <p className="user-info__text">
          <span className="user-info__text--red">Тип заявителя:</span>
          физическое лицо
        </p>
      </div>
    </div>
  );
};

export default Info;
