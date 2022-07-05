import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import FormList from "./FormList/FormList";
import Login from "./Login/Login";

const Main = () => {
  return (
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="FormList" element={<FormList />} />
      <Route path="Login" element={<Login />} />
    </Routes>
  );
};

export default Main;
