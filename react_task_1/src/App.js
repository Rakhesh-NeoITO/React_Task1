import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/home-page";
import SignUpPage from "./pages/sign-up-page";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
