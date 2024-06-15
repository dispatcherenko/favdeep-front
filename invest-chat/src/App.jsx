import "./styles/index.scss";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import SignInModal from "./components/UI/Modals/SignInModal";
import RegistrationPage from "./pages/Registration/Registration";
import Profile from "./pages/Profile/Profile";
import ChatWithBot from "./pages/Chat/ChatWithBot";

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header setModalActive={setModalActive} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<ChatWithBot />} />
        </Routes>
        {modalActive && <SignInModal setActive={setModalActive} />}
      </BrowserRouter>
    </div>
  );
}

export default App;
