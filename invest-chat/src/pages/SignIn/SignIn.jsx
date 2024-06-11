import "./SignIn.scss"
import { ButtonFactory } from "../../components/UI/Buttons/Buttons";

const SignInPage = () => {
  return (
    <main className="SightIn">
      <div className="Sign_block">
        <form action="" className="Sign_form">
          <label className="Sign_title">Вход на сайт</label>
          <span className="Sign_text">Войди и получи ответы на свои вопросы</span>
          <input className="Sign_number_input" type="phone" name="phone-number" placeholder="Номер телефона"/>
          <input className="Sign_email_input" type="email" name="email-address" placeholder="Email"/>
          <div className="Sign_or">
            или
          </div>
          <ButtonFactory type="grey">
            Вход через mos.ru
          </ButtonFactory>
          <a href="">Eще не регистрировались?</a>
        </form>
      </div>
    </main>
  )
}

export default SignInPage;