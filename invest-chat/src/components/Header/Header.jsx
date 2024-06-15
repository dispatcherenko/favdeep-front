import "./Header.scss";
import { useNavigate } from "react-router-dom";
import ButtonFactory from "../UI/Buttons/Buttons";
import { ReactSVG } from "react-svg";

const Header = ({ setModalActive }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="header__logo"
      >
        <ReactSVG src="assets/logo.svg" />
      </div>
      <nav className="header__nav">
        <ButtonFactory type="white" onClick={() => setModalActive(true)}>
          Войти
        </ButtonFactory>
        <ReactSVG
          className="header__link"
          src="../../assets/bell.svg"
          alt="user"
          onClick={() => {
            navigate("/profile");
          }}
        />
        <ReactSVG
          className="header__link"
          src="../../assets/user.svg"
          alt="user"
          onClick={() => {
            navigate("/profile");
          }}
        />
        <ButtonFactory
          onClick={() => {
            navigate("/registration");
          }}
          type="white"
        >
          <img src="/assets/door.svg" alt="door" />
          Регистрация
        </ButtonFactory>
        <ButtonFactory
          onClick={() => {
            navigate("/");
          }}
          type="red"
        >
          Спроси у помощника
        </ButtonFactory>
      </nav>
    </header>
  );
};

export default Header;
