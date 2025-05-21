import LoginForm from "../../components/UserAcountLayout/LoginForm/LoginForm";
import styles from './styles.module.scss'
import RegistrationForm from "../../components/UserAcountLayout/RegistrationForm/RegistrationForm";
import {useState} from "react";
import Img from "../../assets/currency_img.png";
const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const handleFlip = () => {
        setIsLogin(!isLogin);
    }

    return (
        <div className={styles['flip-container']}>
            <div className={`${styles.flipper} ${!isLogin ? styles.rotate : ''}`}>
                <div className={styles.front}>
                    <LoginForm handleFlip={handleFlip} />
                </div>
                <div className={styles.back}>
                    <RegistrationForm handleFlip={handleFlip}/>
                </div>
            </div>
            <img className={styles.pocketImg} src={Img} alt={`pocket logo`} />

        </div>
    );

};

export default LoginPage;
