import RegistrationCard from "../../../UI/Cards/RegistrationCard";
import "./UserInfo.scss";
import Info from "./Pages/Info";
import Status from "./Pages/Status";
import SafetyEdit from "./Pages/SafetyEdit";
import InfoEdit from "./Pages/InfoEdit";
import StatusEdit from "./Pages/StatusEdit";
import { useState } from "react";

const UserInfo = (props) => {
  const [selectedPage, setSelectedPage] = useState("info");
  const [isChanging, setIsChanging] = useState({
    info: false,
    status: false,
    safety: false,
  });
  const isAnyChanging = () => {
    for (let i in isChanging) {
      if (isChanging[i] === true) {
        return true;
      }
    }
  };

  return (
    <div className="user-info">
      <nav className="user-info__nav">
        <span>
          <input
            type="radio"
            name="card"
            id="info"
            onClick={() => {
              setSelectedPage("info");
              setIsChanging((prev) => {
                return { ...prev };
              });
            }}
            defaultChecked={selectedPage === "info"}
            disabled={isAnyChanging()}
          />
          <label className="user-info__label" htmlFor="info">
            Общие данные
          </label>
        </span>
        <span>
          <input
            type="radio"
            name="card"
            id="status"
            onClick={() => setSelectedPage("status")}
            defaultChecked={selectedPage === "status"}
            disabled={isAnyChanging()}
          />
          <label className="user-info__label" htmlFor="status">
            Физическое лицо
          </label>
        </span>
        <span>
          <input
            type="radio"
            name="card"
            id="safety"
            onClick={() => {
              setSelectedPage("safety");
              setIsChanging(true);
            }}
            defaultChecked={selectedPage === "safety"}
            disabled={isAnyChanging()}
          />
          <label className="user-info__label" htmlFor="safety">
            Безопасность пароля
          </label>
        </span>
      </nav>
      <RegistrationCard className={`user-info__card ${selectedPage}`}>
        {selectedPage === "info" && !isChanging["info"] ? (
          <Info setIsChanging={setIsChanging} />
        ) : (
          <></>
        )}
        {isChanging["info"] && <InfoEdit />}
        {selectedPage === "status" && !isChanging["status"] ? (
          <Status setIsChanging={setIsChanging} />
        ) : (
          <></>
        )}
        {isChanging["status"] && <StatusEdit />}
        {selectedPage === "safety" && <SafetyEdit />}
      </RegistrationCard>
    </div>
  );
};

export default UserInfo;
