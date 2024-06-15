import Input from "../UI/Inputs/Input";
import "./RegistrationComponents.scss";

const RegistrationPage2a = (props) => {
  return (
    <div className="form__container--personal-a">
      <Input
        type="text"
        placeholder="Введите ваше ФИО"
        name="name"
        text="ФИО"
      />
      <Input
        type="text"
        placeholder="Введите занимаемую должность"
        name="occupation"
        text="Должность"
      />
      <Input
        type="tel"
        placeholder="Номер телефона"
        name="phone"
        text="Телефон"
      />
      <Input
        type="email"
        placeholder="name@example.com"
        name="email"
        text="Электронная почта"
      />
      <Input
        type="text"
        placeholder="Выберите страну"
        name="country"
        text="Страна"
      />
      <Input
        type="number"
        placeholder="000000"
        name="index"
        text="Почтовый индекс"
      />
      <Input
        type="text"
        placeholder="Город, улица, дом, квартира"
        name="address"
        text="Адрес"
      />
      <Input type="number" placeholder="Для юр. лиц" name="itn" text="ИНН" />
    </div>
  );
};

export default RegistrationPage2a;
