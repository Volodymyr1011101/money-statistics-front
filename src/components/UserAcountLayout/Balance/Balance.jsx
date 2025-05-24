import React from 'react'
import s from '../Balance/Balance.module.css'
// import { selectUser } from '../../../redux/auth/selectors.js'
import { useSelector } from 'react-redux'

const Balance = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className={s.balance_wrapper}>
      <h2 className={s.balance_title}>YOU BALANCE</h2>
       <p className={s.balance_sum}>{user.balance} UAH</p>
    </div>
  )
}

export default Balance;
