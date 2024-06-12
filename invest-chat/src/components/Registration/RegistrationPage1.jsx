import "./RegistrationComponents.scss";

const RegistrationPage1 = (props) => {
  return (
    <div className="form__container--radio">
      <span className="form__radio-wrap">
        <input
          type="radio"
          name="status"
          id="uri"
          onChange={() => props.setUserType("uri")}
          checked={props.userType === "uri"}
        />
        <label className="form__radio-label" htmlFor="uri">
          Юридическое лицо
        </label>
      </span>
      <span className="form__radio-wrap">
        <input
          type="radio"
          name="status"
          id="idp"
          onChange={() => props.setUserType("idp")}
          checked={props.userType === "idp"}
        />
        <label className="form__radio-label" htmlFor="idp">
          Индивидуальный предприниматель
        </label>
      </span>
      <span className="form__radio-wrap">
        <input
          type="radio"
          name="status"
          id="fiz"
          onChange={() => props.setUserType("fiz")}
          checked={props.userType === "fiz"}
        />
        <label className="form__radio-label" htmlFor="fiz">
          Физическое лицо
        </label>
      </span>
    </div>
  );
};

export default RegistrationPage1;
