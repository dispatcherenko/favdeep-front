import "./Header.scss";
import { ButtonFactory } from "../UI/Buttons/Buttons";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">Invest Chat</h1>
      <nav className="header__nav">
        <span className="header__enter">Войти</span>
        <ButtonFactory type="white">Регистрация</ButtonFactory>
        <ButtonFactory type="red">Спросить AI-бота</ButtonFactory>
      </nav>
    </header>
  );
};

export default Header;
