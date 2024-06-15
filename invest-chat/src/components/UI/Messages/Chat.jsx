import Messages from './Messages'
import ButtonFactory from '../Buttons/Buttons';

const Chat = () => {

  document.addEventListener('DOMContentLoaded', () => {
    const headernav = document.querySelector('.header__nav');
    headernav.style.display = 'none'
    let message1 = document.querySelector('.chat__message-input'),
      submitForm1 = document.querySelector('.chat__message-button'),
      chat = document.querySelector('.chat__messages'),
      idMessage0 = -1,
      db1 = 0,
      message = {
        id: 0,
        text: '',
        user: ''
      }
    const database = [
      [],
    ];
    const createMessage = (userForm) => {
      const messageUpdate = (text, user, id) => {
        message.id = id;
        message.text = text;
        message.user = user;
      }
      const updateDataBase = (db) => {
        database[db].push(message);
      }
      const chatUpdate = (db, value) => {
        let html = `<div class="chat__message"><div class="chat__message__content"><div class='p'>${value}</div></div></div>`
        chat.innerHTML += html;
      }
      switch (userForm) {
        case 'user1form':
          idMessage0++;
          messageUpdate(message1.value, 'user1', idMessage0);
          updateDataBase(db1);
          chatUpdate( db1, message1.value);
          break;
        default:
          break;
      }
    }
    submitForm1.addEventListener('click', (e) => {
      e.preventDefault();
      createMessage('user1form');
    })
  })

  return (
    <>
      <p id='chat__label'>Онлайн помощник</p>
      <Messages />
      <div className='chat__message-input-wrapper'>
        <label>Задай свой вопрос</label>
        <div className='chat__message-input-box'>
          <input
            className="chat__message-input"
            type="text"
            placeholder="Введите запрос" />
          <ButtonFactory
            type='submit'
            className="chat__message-button"
          // onClick={sendButtonClick}
          >
            Отправить
          </ButtonFactory>
        </div>
      </div>
    </>
  )
}


export default Chat;