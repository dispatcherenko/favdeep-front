import React from "react";
import Input from "../UI/Inputs/Input";

const RegistrationPage3 = (props) => {
  return (
    <div className="form__container--password">
      {/* <input type="radio" name="status" id="uri" /> */}
      <Input
        type="text"
        text="Придумайте пароль"
        name="pass"
        className="form__pass-input"
      />

      <p style={{ marginTop: 8, fontSize: 14 }} className="form__pass-input">
        Пароль должен содержать минимум 8 символов, буквы в нижнем и верхнем
        регистре, цифры и специальные символы
      </p>

      <Input
        type="text"
        text="Повторите пароль"
        name="passRep"
        style={{ marginTop: 24 }}
        className="form__pass-input"
      />

      <div className="form__checkbox-wrap">
        <input
          type="checkbox"
          id="agree"
          className="form__custom-checkbox"
          required
        />
        <label htmlFor="agree">
          Я соглашаюсь с <a href="/">Условиями использования</a>
        </label>
      </div>
    </div>
  );
};

export default RegistrationPage3;
