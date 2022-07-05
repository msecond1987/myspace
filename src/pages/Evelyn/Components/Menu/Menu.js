import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RollbackOutlined } from "@ant-design/icons";

const NavMenu = (props) => {
  //宣告一個新的isActive變數
  const [isActive, setActive] = useState(false);
  const [isFixed, setFixed] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop; //滾動條滾動高度
    setFixed(scrollTop);
  };

  return (
    <nav className={isFixed > 100 ? "isFixed" : ""}>
      <div className="logo"></div>
      <button
        type="button"
        className={isActive ? "navbar-toggle active" : "navbar-toggle"}
        onClick={() => setActive(!isActive)}
      >
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <ul className="main-menu">
        <li>
          <Link to="/">{<RollbackOutlined />} 回上一頁</Link>
        </li>
        <li className={props.page === "home" ? "active" : ""}>
          <Link to="/Evelyn/Home">排版練習Home</Link>
        </li>
        <li className={props.page === "form-list" ? "active" : ""}>
          <Link to="/Evelyn/FormList">表單練習</Link>
        </li>
        <li className={props.page === "login" ? "active" : ""}>
          <Link to="/Evelyn/Login">登入Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
