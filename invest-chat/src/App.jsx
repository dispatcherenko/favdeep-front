import "./styles/index.scss";

import { jwtDecode } from "jwt-decode";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import SignInModal from "./components/UI/Modals/SignInModal";
import RegistrationPage from "./pages/Registration/Registration";
import Profile from "./pages/Profile/Profile";
import ChatWithBot from "./pages/Chat/ChatWithBot";
import Userfront, { SignupForm } from "@userfront/toolkit/react";

import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

Userfront.init("");

const UserContext = createContext();

function App() {
  const [modalActive, setModalActive] = useState(false);

  const [user, setUser] = useState({});

  useState(() => {
    const refresh = async () => {
      try {
        const responseRefresh = await axios.post(
          "https://ai-assistent-backend.onrender.com/api/refresh/",
          { refresh: localStorage.getItem("refresh") }
        );
        const decoded = jwtDecode(responseRefresh.data.access);
        login(decoded.user_id);
      } catch (error) {
        console.log(error);
      }
    };

    const login = async (id) => {
      try {
        const responseGetUser = await axios.get(
          `https://ai-assistent-backend.onrender.com/api/user/${id}/`
        );
        setUser(responseGetUser.data);
      } catch (error) {
        console.log(error);
      }
    };
    refresh();
  }, []);
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <Header setModalActive={setModalActive} user={user} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/chat" element={<ChatWithBot />} />
        </Routes>
        {modalActive && <SignInModal setActive={setModalActive} />}
      </BrowserRouter>
    </div>
  );
}

export default App;
