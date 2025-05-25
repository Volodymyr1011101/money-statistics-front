import React from 'react'
import BtnExit from '../BtnExit/BtnExit'
import s from '../UserInfo/UserInfo.module.css'
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const user = useSelector((state) => state.auth.user);
  const name = user.name;
  

  return (
    <div className={s.userinfo_wrapper}>
      <p className={s.link_name}>{name}</p>    
      <BtnExit/>
    </div>
  )
}

export default UserInfo
