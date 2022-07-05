import { Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import Colleen from "./Colleen/Colleen";
import Evelyn from "./Evelyn/Evelyn";
import "antd/dist/antd.min.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("12121212");
  });

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="Colleen/*" element={<Colleen />} />
      <Route path="Evelyn/*" element={<Evelyn />} />
    </Routes>
  );
}
export default App;
