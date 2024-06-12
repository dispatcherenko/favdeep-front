import "./RegistrationComponents.scss";
import RegistrationCard from "../UI/Cards/RegistrationCard";
import RegistrationPage1 from "./RegistrationPage1";
import RegistrationPage2a from "./RegistrationPage2a";
import RegistrationPage2b from "./RegistrationPage2b";
import RegistrationPage3 from "./RegistrationPage3";

const Page1 = (props) => {
  return (
    <div className="form">
      <h2 className="form__title">Тип пользователя</h2>

      <RegistrationCard>
        <RegistrationPage1
          userType={props.userType}
          setUserType={props.setUserType}
        />
      </RegistrationCard>
    </div>
  );
};

const Page2 = (props) => {
  return (
    <div className="form">
      <h2 className="form__title">Личные данные</h2>

      <RegistrationCard>
        {props.userType === "uri" ? (
          <RegistrationPage2b />
        ) : (
          <RegistrationPage2a />
        )}
      </RegistrationCard>
    </div>
  );
};

const Page3 = (props) => {
  return (
    <div className="form">
      <h2 className="form__title">Пароль</h2>
      <RegistrationCard>
        <RegistrationPage3 />
      </RegistrationCard>
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
