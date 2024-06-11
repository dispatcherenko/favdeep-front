import "./MainPage.scss";
import { ButtonFactory } from "../../components/UI/Buttons/Buttons";

const MainPage = (props) => {
  return (
    <main className="main">
      <h1 className="main__head">Узнай ответы на вопросы у помощника</h1>
      <p className="main__text">
        Lorem ipsum dolor sit amet consectetur. Maecenas eget orci ut placerat
        congue pretium aliquam. Ultricies venenatis sagittis senectus eleifend.
        Odio lobortis eget malesuada viverra arche untero ultrices donec sit
        aenean.
      </p>
      <div className="main__buttons">
        <ButtonFactory type="red">
          Хочу купить или продать участок
        </ButtonFactory>
        <ButtonFactory type="red">Как содержать участок БИК?</ButtonFactory>
        <ButtonFactory type="red">
          Какие есть услуги для клиентов?
        </ButtonFactory>
        <ButtonFactory type="red">
          Нужен выгодный кредит или займ?
        </ButtonFactory>
        <ButtonFactory type="red">Помогаете многотетным семьям?</ButtonFactory>
      </div>
    </main>
  );
};

export default MainPage;
