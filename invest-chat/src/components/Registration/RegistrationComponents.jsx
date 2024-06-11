import "./RegistrationComponents.scss";
import RegistrationCard from "../UI/Cards/RegistrationCard";

const Page1 = (props) => {
  return (
    <div className="form">
      <h2 className="form__title">Тип пользователя</h2>

      <RegistrationCard>
        <div className="form__container--radio">
          <span className="form__radio-wrap">
            <input type="radio" name="status" id="uri" />
            <label className="form__radio-label" htmlFor="uri">
              Юридическое лицо
            </label>
          </span>
          <span className="form__radio-wrap">
            <input type="radio" name="status" id="idp" />
            <label className="form__radio-label" htmlFor="idp">
              Индивидуальный предприниматель
            </label>
          </span>
          <span className="form__radio-wrap">
            <input type="radio" name="status" id="fiz" />
            <label className="form__radio-label" htmlFor="fiz">
              Физическое лицо
            </label>
          </span>
        </div>
      </RegistrationCard>
    </div>
  );
};

const Page2 = (props) => {
  return (
    <div className="form">
      <h2 className="form__title">Личные данные</h2>

      <RegistrationCard>
        <div className="form__container--personal">
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
      </RegistrationCard>
    </div>
  );
};

const Page3 = (props) => {
  return (
    <div>
      <h2 className="reg__form-title">Пароль</h2>

      <div className="reg__form-container">
        <div className="reg__radio-wrap">
          {/* <input type="radio" name="status" id="uri" /> */}
          <p>Придумайте пароль</p>
          <input type="text" />
          <span><br /><br />Пароль должен содержать минимум 8 символов, буквы в нижнем и верхнем регистре, цифры и специальные символы</span>
        </div>
        <div className="reg__radio-wrap">
          {/* <input type="radio" name="status" id="idp" /> */}
          <p>Повторите пароль</p>
          <input type="text" />
        </div>
          <div className="reg__checkbox-wrap">
            <input type="checkbox" id="agree" class="reg__custom-checkbox" required/>
            <label for="agree">Я соглашаюсь с <a href="">Условиями использования</a></label>
          </div>
      </div>
    </div>
  );
};

export const RegistrationFactory = (props) => {
  switch (props.page) {
    case "1":
      return Page1(props);
    case "2":
      return Page2(props);
    case "3":
      return Page3(props);
    default:
      return Page1(props);
  }
};
