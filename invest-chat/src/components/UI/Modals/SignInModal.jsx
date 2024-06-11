import "./SignInModal.scss";
import { ButtonFactory } from "../Buttons/Buttons";

const SignInModal = ({ active, setActive }) => {
  return (
    <main
      className={active ? "sign__active" : "sign"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "sign__block" : "block"}
        onClick={(e) => e.stopPropagation()}
      >
        <form action="" className="sign__form">
          <label className="sign__title">Вход на сайт</label>
          <span className="sign__text">
            Войди и получи ответы на свои вопросы
          </span>
          <input
            className="sign__number-input"
            type="phone"
            name="phone-number"
            placeholder="Номер телефона"
          />
          <input
            className="sign__email-input"
            type="email"
            name="email-address"
            placeholder="Email"
          />
          <div className="sign__or">или</div>
          <ButtonFactory type="red">Вход через mos.ru</ButtonFactory>
          <p href=""><a href="">Eще не регистрировались?</a></p>
        </form>
      </div>
    </main>
  );
};

export default SignInModal;
