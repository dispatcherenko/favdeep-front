import Input from "../../../../UI/Inputs/Input";
import ButtonFactory from "../../../../UI/Buttons/Buttons";

const SafetyEdit = (props) => {
  return (
    <div className="user-info__edit">
      <p style={{ marginBottom: 24 }}>
        Для изменения пароля введите Старый пароль, Новый пароль и повторите
        Новый
      </p>
      <form className="user-info__form">
        <div className="user-info__inputs">
          <Input type="text" name="oldPass" text="Старый пароль" />
          <Input type="text" name="newPass" text="Новый пароль" />
          <Input type="text" name="repeatPass" text="Повторите пароль" />
        </div>
        <footer className="user-info__buttons">
          <ButtonFactory type="white">Отменить</ButtonFactory>
          <ButtonFactory type="red">Сохранить изменения </ButtonFactory>
        </footer>
      </form>
    </div>
  );
};

export default SafetyEdit;
