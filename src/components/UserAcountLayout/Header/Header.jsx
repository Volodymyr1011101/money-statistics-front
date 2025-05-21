import React from "react";
import logo from "../../../assets/Logo.svg";
import Logo from "../../../UI/Logo/Logo.jsx";
import s from "../Header/Header.module.css";
import UserInfo from "../UserInfo/UserInfo.jsx";

const Header = ({ onLogoClick }) => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <div onClick={onLogoClick} style={{ cursor: "pointer" }}>
          <Logo img={logo} className={s.logo} />
        </div>
        <UserInfo />
      </header>
    </div>
  );
};

export default Header;
