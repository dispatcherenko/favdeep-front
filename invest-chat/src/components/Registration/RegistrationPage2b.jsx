import "./RegistrationComponents.scss";

const RegistrationPage2b = (props) => {
  return (
    <div className="form__container--personal-b">
      <span className="form__text-field" id="name">
        <label>ФИО</label>
        <input type="text" placeholder="Введите ваше ФИО" />
      </span>
      <span className="form__text-field" id="orrganization">
        <label>Наименование организации</label>
        <input type="text" placeholder="Введите название организации" />
      </span>
      <span className="form__text-field" id="itp">
        <label>ИНН</label>
        <input type="number" placeholder="Укажите ИНН организации" />
      </span>
      <span className="form__text-field" id="email">
        <label>Электронная почта</label>
        <input type="email" placeholder="name@example.com" />
      </span>
      <span className="form__text-field" id="page">
        <label>Веб сайт организации</label>
        <input type="url" placeholder="https://..." />
      </span>
      <span className="form__text-field" id="type">
        <label>Отрасль ведения хоз. деятельности</label>
        <input type="number" placeholder="Выберите отрасль" />
      </span>
      <span className="form__text-field" id="country">
        <label>Страна</label>
        <input type="text" placeholder="Выберите страну" />
      </span>
      <span className="form__text-field" id="city">
        <label>Город</label>
        <input type="text" placeholder="Город, улица, дом, квартира" />
      </span>
      <span className="form__text-field" id="occupation">
        <label>Должность</label>
        <input type="text" placeholder="Должность" />
      </span>
    </div>
  );
};

export default RegistrationPage2b;
