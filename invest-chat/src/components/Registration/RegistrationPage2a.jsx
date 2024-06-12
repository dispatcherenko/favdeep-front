import "./RegistrationComponents.scss";

const RegistrationPage2a = (props) => {
  return (
    <div className="form__container--personal-a">
      <span className="form__text-field" id="name">
        <label>ФИО</label>
        <input type="text" placeholder="Введите ваше ФИО" />
      </span>
      <span className="form__text-field" id="occupation">
        <label>Должность</label>
        <input type="text" placeholder="Введите занимаемую должность" />
      </span>
      <span className="form__text-field" id="phone">
        <label>Телефон</label>
        <input type="tel" placeholder="Номер телефона" />
      </span>
      <span className="form__text-field" id="email">
        <label>Электронная почта</label>
        <input type="email" placeholder="name@example.com" />
      </span>
      <span className="form__text-field" id="country">
        <label>Страна</label>
        <input type="text" placeholder="Выберите страну" />
      </span>
      <span className="form__text-field" id="index">
        <label>Почтовый индекс</label>
        <input type="number" placeholder="000000" />
      </span>
      <span className="form__text-field" id="address">
        <label>Адрес</label>
        <input type="text" placeholder="Город, улица, дом, квартира" />
      </span>
      <span className="form__text-field" id="itn">
        <label>ИНН</label>
        <input type="number" placeholder="Для юр. лиц" />
      </span>
    </div>
  );
};

export default RegistrationPage2a;
