import ButtonFactory from "../../../../UI/Buttons/Buttons";
import Input from "../../../../UI/Inputs/Input";

const StatusEdit = (props) => {
  return (
    <div className="user-info__edit">
      <form className="user-info__form">
        <div className="user-info__inputs">
          <Input type="number" name="name" text="Почтовый индекс" />
          <Input type="text" name="occupation" text="Фактический адрес" />
          <Input type="number" name="phone" text="ИНН" />
        </div>
        <footer className="user-info__buttons">
          <ButtonFactory type="white">Отменить</ButtonFactory>
          <ButtonFactory type="red">Сохранить изменения </ButtonFactory>
        </footer>
      </form>
    </div>
  );
};

export default StatusEdit;
