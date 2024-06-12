import React from "react";

const RegistrationPage3 = (props) => {
  return (
    <div className="form__container--password">
      <div className="form__pass-wrap">
        {/* <input type="radio" name="status" id="uri" /> */}
        <p>Придумайте пароль</p>
        <input type="text" />
        <span>
          <br />
          <br />
          Пароль должен содержать минимум 8 символов, буквы в нижнем и верхнем
          регистре, цифры и специальные символы
        </span>
      </div>
      <div className="form__pass-wrap">
        {/* <input type="radio" name="status" id="idp" /> */}
        <p>Повторите пароль</p>
        <input type="text" />
      </div>
      <div className="form__checkbox-wrap">
        <input
          type="checkbox"
          id="agree"
          class="form__custom-checkbox"
          required
        />
        <label for="agree">
          Я соглашаюсь с <a href="/">Условиями использования</a>
        </label>
      </div>
    </div>
  );
};

export default RegistrationPage3;
