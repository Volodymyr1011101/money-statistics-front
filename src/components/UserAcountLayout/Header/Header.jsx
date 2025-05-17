import React from 'react'
import logo from '../../../assets/Logo.svg'
import Logo from '../../../UI/Logo/Logo.jsx'
import s from '../Header/Header.module.css'
import UserInfo from '../UserInfo/UserInfo.jsx'

const Header = () => {
    return (
        <div className={s.container}>
            <header className={s.header}>
                <Logo img={logo} className={s.logo} />
                <UserInfo/>  
            </header>
         </div>
  )
}

export default Header
