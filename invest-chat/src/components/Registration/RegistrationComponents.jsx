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
            <input type="text" />
          </span>
          <span className="form__text-field" id="occupation">
            <label>Должность</label>
            <input type="text" />
          </span>
          <span className="form__text-field" id="phone">
            <label>Телефон</label>
            <input type="tel" />
          </span>
          <span className="form__text-field" id="email">
            <label>Электронная почта</label>
            <input type="email" />
          </span>
          <span className="form__text-field" id="country">
            <label>Страна</label>
            <input type="text" />
          </span>
          <span className="form__text-field" id="index">
            <label>Почтовый индекс</label>
            <input type="number" />
          </span>
          <span className="form__text-field" id="address">
            <label>Адрес</label>
            <input type="text" />
          </span>
          <span className="form__text-field" id="itn">
            <label>Почтовый индекс</label>
            <input type="number" />
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
        <span className="reg__radio-wrap">
          <input type="radio" name="status" id="uri" />
          <p>Юридическое лицо</p>
        </span>
        <span className="reg__radio-wrap">
          <input type="radio" name="status" id="idp" />
          <p>Индивидуальный предприниматель</p>
        </span>
        <span className="reg__radio-wrap">
          <input type="radio" name="status" id="fiz" />
          <p>Физическое лицо</p>
        </span>
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
