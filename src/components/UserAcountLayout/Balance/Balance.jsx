import React from 'react'
import s from '../Balance/Balance.module.css'

const Balance = () => {

  const getBalance = () => {
    return ("Balance")
  } //запрос на бэк сумма баланса

  return (
    <div className={s.balance_wrapper}>
      <h2 className={s.balance_title}>YOU BALANCE</h2>
      <p className={s.balance_sum}>{getBalance()} UAH</p>
    </div>
  )
}

export default Balance;
