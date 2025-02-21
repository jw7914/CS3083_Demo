import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Crimes from "./Pages/Crimes";

function App() {
  return (
    <Routes>
      <Route path="/crimes" element={<Crimes />} />
    </Routes>
  );
}

export default App;
