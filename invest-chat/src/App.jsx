import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import RegistrationPage from "./pages/Registration/Registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
