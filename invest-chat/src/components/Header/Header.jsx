import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { ButtonFactory } from "../UI/Buttons/Buttons";
import Door from "../../assets/door.svg";
import Logo from "../../assets/logo.svg";

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
        <img src={Logo} alt="logo" />
      </div>
      <nav className="header__nav">
        <ButtonFactory type="white" onClick={() => setModalActive(true)}>
          Войти
        </ButtonFactory>
        <ButtonFactory
          onClick={() => {
            navigate("/registration");
          }}
          type="white"
        >
          <img src={Door} alt="door" />
          Регистрация
        </ButtonFactory>
      </nav>
    </header>
  );
};

export default Header;
