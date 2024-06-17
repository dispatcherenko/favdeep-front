import UserInfo from "../../components/Profile/Pages/UserInfo/UserInfo";
import "./Profile.scss";

const Profile = ({ user }) => {
  return (
    <main className="profile">
      <div className="profile__container">
        <div className="profile__right">
          <h1 className="profile__title">Профиль</h1>
          <nav className="profile__select">
            <span className="profile__radio-wrap">
              <input type="radio" name="page" id="profile" />
              <label className="profile__radio-label" htmlFor="profile">
                Личный кабинет
              </label>
            </span>
            <span className="profile__radio-wrap">
              <input type="radio" name="page" id="favorites" />
              <label className="profile__radio-label" htmlFor="favorites">
                Избранные торги
              </label>
            </span>
            <span className="profile__radio-wrap">
              <input type="radio" name="page" id="filters" />
              <label className="profile__radio-label" htmlFor="filters">
                Мои фильтры
              </label>
            </span>
            <span className="profile__radio-wrap">
              <input type="radio" name="page" id="compare" />
              <label className="profile__radio-label" htmlFor="compare">
                Сравнение объектов
              </label>
            </span>
          </nav>
        </div>

        <div className="profile__left">
          <UserInfo user={user} />
        </div>
      </div>
    </main>
  );
};

Profile.propTypes = {};

export default Profile;
