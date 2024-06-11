import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { ButtonFactory } from "../UI/Buttons/Buttons";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="header__logo"
      >
        Invest Chat
      </h1>
      <nav className="header__nav">
        <span className="header__enter">Войти</span>
        <ButtonFactory
          onClick={() => {
            navigate("/registration");
          }}
          type="white"
        >
          Регистрация
        </ButtonFactory>
        <ButtonFactory type="red">Спросить AI-бота</ButtonFactory>
      </nav>
    </header>
  );
};

export default Header;
