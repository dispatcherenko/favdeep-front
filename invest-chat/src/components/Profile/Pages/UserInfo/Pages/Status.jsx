import "../UserInfo.scss";
import ButtonFactory from "../../../../UI/Buttons/Buttons";

const Status = ({ user, setIsChanging }) => {
  return (
    <div className="user-info__info">
      <div className="user-info__info-right">
        <p className="user-info__text">Страна: {user.country}</p>
        <p className="user-info__text">Почтовый индекс: 000000</p>
        <p className="user-info__text">Фактический адрес: ул.Улица д.0 кв.0</p>
        <p className="user-info__text">ИНН: {user.inn}</p>
        <ButtonFactory
          className="user-info__button"
          type="white"
          onClick={() =>
            setIsChanging((prev) => {
              return { ...prev, status: true };
            })
          }
        >
          Изменить ваши данные
        </ButtonFactory>
      </div>
    </div>
  );
};

export default Status;
