import "../UserInfo.scss";
import ButtonFactory from "../../../../UI/Buttons/Buttons";

const Info = ({ user, setIsChanging }) => {
  return (
    <div className="user-info__info">
      <div className="user-info__info-right">
        <p className="user-info__text">{user.last_name}</p>
        <p className="user-info__text">{user.email}</p>
        <p className="user-info__text">{user.country}</p>
        <ButtonFactory
          className="user-info__button"
          type="white"
          onClick={() =>
            setIsChanging((prev) => {
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
          {user.organisation_sector}
        </p>
      </div>
    </div>
  );
};

export default Info;
