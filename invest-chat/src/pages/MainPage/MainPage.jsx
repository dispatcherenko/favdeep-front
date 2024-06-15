import "./MainPage.scss";
import ButtonFactory from "../../components/UI/Buttons/Buttons";

const MainPage = (props) => {
  return (
    <main className="main">
      <h1 className="main__head">
        Узнай ответы на вопросы у{" "}
        <span className="main__head--important">личного помощника</span>
      </h1>
      <p className="main__text">
        Личный помощник готов помочь Вам с комплексным подбором инвестплощадок,
        мер поддержки и иных полезных сервисов
      </p>{" "}
      <ButtonFactory type="red" className="main__button">
        Задать вопрос
      </ButtonFactory>
    </main>
  );
};

export default MainPage;
