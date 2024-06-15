import "./SignInModal.scss";
import ButtonFactory from "../Buttons/Buttons"

const SignInModal = ({ active, setActive }) => {

  // const [activeButton, setActiveButton] = useState(true);
  const tabsButtons = document.querySelectorAll('.sign__tabs__button');

  tabsButtons.forEach(btn => {
    btn.addEventListener('click', () => {

      const prevActiveButton = document.querySelector('.sign__tabs__button._active-button');
      const prevActiveItem = document.querySelector('.sign__tabs__item._active');

      if (prevActiveButton) {
        prevActiveButton.classList.remove('_active-button');
      }

      // Проверяем есть или нет предыдущая активная вкладка
      if (prevActiveItem) {
        prevActiveItem.classList.remove('_active');
      }
      // получаем id новой активной вкладки, который мы перем из атрибута data-tab у кнопки
      const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
      // получаем новую активную вкладку по id
      const nextActiveItem = document.querySelector(nextActiveItemId);

      // добавляем класс _active кнопке на которую нажали
      btn.classList.add('_active-button');
      // добавляем класс _active новой выбранной вкладке
      nextActiveItem.classList.add('_active');
    });
  })

  return (
    <main
      className={active ? "sign__active" : "sign"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "sign__block" : "block"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sign__tabs">
          <label className="sign__title">Вход на сайт</label>
          <div className="sign__text">
            Войди и получи ответы на свои вопросы
          </div>
          <div className="sign__nav">
            <button class="sign__tabs__button sign__tabs__button-left _active-button" data-tab="tab_1">по электронной почте</button>
            <button class="sign__tabs__button sign__tabs__button-right" data-tab="tab_2">по номеру телефона</button>
          </div>
          <div className="sign__content">
            <div class="sign__tabs__item _active" id="tab_1">
              <form className="sign__form">
                <label className="sigh__label">Логин</label>
                <input
                  className="sign__number-input"
                  name="login"
                />
                <label className="sigh__label">Пароль</label>
                <input
                  className="sign__email-input"
                  type="password"
                  name="password"
                />
                <div className="sign__know-mebox">
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">Запомнить меня</label>
                  </div>
                  <div><a href="/">Забыли пароль</a></div>
                </div>
                <div className="sign__or">или</div>
                <ButtonFactory type="red">Вход через mos.ru</ButtonFactory>
                <p href=""><a href="/">Eще не регистрировались?</a></p>
              </form>
            </div>
            <div class="sign__tabs__item" id="tab_2">
              <form className="sign__form">
                <label>Телофон</label>
                <input
                  className="sign__number-input"
                  type="phone"
                  name="phone-number"
                  placeholder="Номер телефона"
                />
                <div className="sign__or">или</div>
                <ButtonFactory type="red">Вход через mos.ru</ButtonFactory>
                <p href="/"><a href="/">Eще не регистрировались?</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
};

export default SignInModal;
