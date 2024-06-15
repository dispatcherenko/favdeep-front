import ButtonFactory from "../../../../UI/Buttons/Buttons";
import Input from "../../../../UI/Inputs/Input";

const InfoEdit = (props) => {
  return (
    <div className="user-info__edit">
      <form className="user-info__form">
        <div className="user-info__inputs">
          <Input type="text" name="name" text="ФИО" />
          <Input type="text" name="occupation" text="Должность" />
          <Input type="tel" name="phone" text="Телефон" />
          <Input type="email" name="emain" text="Эл. почта" />
        </div>
        <footer className="user-info__buttons">
          <ButtonFactory type="white">Отменить</ButtonFactory>
          <ButtonFactory type="red">Сохранить изменения </ButtonFactory>
        </footer>
      </form>
    </div>
  );
};

export default InfoEdit;
