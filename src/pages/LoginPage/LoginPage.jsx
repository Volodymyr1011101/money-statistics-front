import LoginForm from "../../components/UserAcountLayout/LoginForm/LoginForm";
import styles from "./styles.module.scss";
import RegistrationForm from "../../components/UserAcountLayout/RegistrationForm/RegistrationForm";
import { useEffect, useState } from "react";
import Img from "../../assets/currency_img.webp";

const LoginPage = ({ isRegister = false }) => {
  const [isLogin, setIsLogin] = useState(!isRegister);
  const handleFlip = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    window.history.replaceState({}, "", isLogin ? "/login" : "/register");
  }, [isLogin]);

  return (
    <div className={styles["flip-container"]}>
      <div className={`${styles.flipper} ${!isLogin ? styles.rotate : ""}`}>
        <div className={styles.front}>
          <LoginForm handleFlip={handleFlip} />
        </div>
        <div className={styles.back}>
          <RegistrationForm handleFlip={handleFlip} />
        </div>
      </div>
      <img className={styles.pocketImg} src={Img} alt={`pocket logo`} />
    </div>
  );
};

export default LoginPage;
