import "./SignInModal.scss";
import ButtonFactory from "../Buttons/Buttons";
import { useState } from "react";
import axios from "axios";

const SignInModal = ({ active, setActive }) => {
  const [logInType, setLogInType] = useState(true);

  const [emailInput, setEmailInput] = useState({ email: "", password: "" });

  const emailChanged = (e) => {
    setEmailInput((prev) => ({
      ...prev,
      email: e.target.value,
    }));
    console.log(emailInput);
  };

  const passwordChanged = (e) => {
    setEmailInput((prev) => ({
      ...prev,
      password: e.target.value,
    }));
    console.log(emailInput);
  };

  const logIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ai-assistent-backend.onrender.com/api/login/",
        emailInput
      );
      localStorage.setItem("refresh", response.data.refresh);
      localStorage.setItem("access", response.data.access);
    } catch (error) {
      console.log(error);
    } finally {
      setEmailInput({ email: "", password: "" });
    }
  };

  return (
    <main className="sign__active" onClick={() => setActive(false)}>
      <div className="sign__block" onClick={(e) => e.stopPropagation()}>
        <div className="sign__tabs">
          <label className="sign__title">Вход на сайт</label>
          <div className="sign__text">
            Войди и получи ответы на свои вопросы
          </div>
          <div className="sign__nav">
            <button
              className={`sign__tabs__button sign__tabs__button-left ${
                logInType ? "active-button" : ""
              }`}
              onClick={() => {
                setLogInType(true);
              }}
              data-tab="tab_1"
            >
              по электронной почте
            </button>
            <button
              className={`sign__tabs__button sign__tabs__button-right ${
                !logInType ? "active-button" : ""
              }`}
              onClick={() => {
                setLogInType(false);
              }}
              data-tab="tab_2"
            >
              по номеру телефона
            </button>
          </div>
          <div className="sign__content">
            <form className="sign__form">
              {logInType === true ? (
                <>
                  <label className="sigh__label" htmlFor="login">
                    Email
                  </label>
                  <input
                    value={emailInput.email}
                    onChange={emailChanged}
                    className="sign__number-input"
                    name="login"
                    type="email"
                    pattern=".+@example\.com"
                  />
                  <label
                    className="sigh__label"
                    htmlFor="password"
                    autoComplete="on"
                  >
                    Пароль
                  </label>
                  <input
                    className="sign__email-input"
                    type="password"
                    name="password"
                    value={emailInput.password}
                    onChange={passwordChanged}
                  />
                </>
              ) : (
                <>
                  <label>Телeфон</label>
                  <input
                    className="sign__number-input"
                    type="phone"
                    name="phone-number"
                    placeholder="Номер телефона"
                  />
                </>
              )}
              <div className="sign__know-mebox">
                <div>
                  <input type="checkbox" />
                  <label htmlFor="">Запомнить меня</label>
                </div>
                <div>
                  <a href="/">Забыли пароль</a>
                </div>
              </div>
              <ButtonFactory
                className="sign__button"
                type="red"
                onClick={logIn}
              >
                Войти
              </ButtonFactory>
            </form>
          </div>

          <div className="sign__or">или</div>
          <a href="/registration">Eще не регистрировались?</a>
        </div>
      </div>
    </main>
  );
};

export default SignInModal;
