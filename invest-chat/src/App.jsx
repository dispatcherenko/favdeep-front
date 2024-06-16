import "./styles/index.scss";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import SignInModal from "./components/UI/Modals/SignInModal";
import RegistrationPage from "./pages/Registration/Registration";
import Profile from "./pages/Profile/Profile";
import ChatWithBot from "./pages/Chat/ChatWithBot";
import Userfront, { SignupForm } from "@userfront/toolkit/react";

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

Userfront.init("");

function App() {
  useState(() => {
    const refresh = async () => {
      try {
        const response = await axios.post(
          "https://ai-assistent-backend.onrender.com/api/refresh/",
          localStorage.getItem("refresh")
        );
      } catch (error) {}
    };
  }, []);

  const [modalActive, setModalActive] = useState(false);

  const [user, setUser] = useState({});

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
