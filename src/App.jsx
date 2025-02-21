import { Route, Routes } from "react-router-dom";
import Crimes from "./Pages/Crimes";
import HomePage from "./Pages/Home";
import RegisterPage from "./Pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/crimes" element={<Crimes />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
