import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import SignInModal from "./pages/Modals/SignInModal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationPage from "./pages/Registration/Registration";
import "./styles/index.scss";
import { useState } from "react";


function App() {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Header setModalActive={setModalActive}/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
        <SignInModal active={modalActive} setActive={setModalActive}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
