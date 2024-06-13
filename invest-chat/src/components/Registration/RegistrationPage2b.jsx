import Input from "../UI/Inputs/Input";
import "./RegistrationComponents.scss";

const RegistrationPage2b = (props) => {
  return (
    <div className="form__container--personal-b">
      <Input
        type="text"
        placeholder="Введите ваше ФИО"
        name="name"
        text="ФИО"
      />
      <Input
        type="text"
        placeholder="Введите название организации"
        name="organization"
        text="Наименование организации"
      />
      <Input
        type="number"
        placeholder="Укажите ИНН организации"
        name="itp"
        text="ИНН"
      />
      <Input
        type="email"
        placeholder="name@example.com"
        name="email"
        text="Электронная почта"
      />
      <Input
        type="url"
        placeholder="https://..."
        name="page"
        text="Веб сайт организации"
      />
      <Input
        type="text"
        placeholder="Выберите отрасль"
        name="type"
        text="Отрасль ведения хоз. деятельности"
      />
      <Input
        type="text"
        placeholder="Выберите страну"
        name="country"
        text="Страна"
      />
      <Input
        type="text"
        placeholder="Город, улица, дом, квартира"
        name="city"
        text="Город"
      />
      <Input
        type="text"
        placeholder="Введите должность"
        name="occupation"
        text="Должность"
      />
    </div>
  );
};

export default RegistrationPage2b;
