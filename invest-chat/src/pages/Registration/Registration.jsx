import "./Registration.scss";
import { ButtonFactory } from "../../components/UI/Buttons/Buttons";
import { RegistrationFactory } from "../../components/Registration/RegistrationComponents";
import { useMultistepForm } from "../../hooks/useMultiStepForm";

const RegistrationPage = (props) => {
  const { currentStep, steps, step, next, prev } = useMultistepForm([
    <RegistrationFactory page="1" />,
    <RegistrationFactory page="2" />,
    <RegistrationFactory page="3" />,
  ]);

  return (
    <div className="reg">
      <form className="reg__form">
        <header className="reg__header">
          {" "}
          <h1 className="reg__title">Регистрация</h1>
          <span className="reg__nav">
            {currentStep + 1} из {steps.length}
          </span>
        </header>
        {step}

        <footer className="reg__footer">
          {currentStep !== 0 && (
            <ButtonFactory
              className="reg__prev"
              type="white"
              onClick={(e) => {
                e.preventDefault();
                prev();
              }}
            >
              Назад
            </ButtonFactory>
          )}

          <ButtonFactory
            className="reg__next"
            type="red"
            onClick={(e) => {
              e.preventDefault();
              next();
            }}
          >
            {currentStep !== steps.length - 1 ? "Далее" : "Подтвердить"}
          </ButtonFactory>
        </footer>
      </form>
    </div>
  );
};

export default RegistrationPage;
