import React from 'react'
import BtnExit from '../BtnExit/BtnExit'
import s from '../UserInfo/UserInfo.module.css'

const UserInfo = () => {

  return (
    <div className={s.userinfo_wrapper}>
      <p className={s.link_name}>Name</p>    
      <BtnExit/>
    </div>
  )
}

export default UserInfo
