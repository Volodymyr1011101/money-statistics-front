import s from '../Balance/Balance.module.css'
import { useSelector } from 'react-redux'

const Balance = () => {
  const user = useSelector((state) => state.auth.user);
  const balance = user.balance.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  return (
    <div className={s.balance_wrapper}>
      <h2 className={s.balance_title}>YOU BALANCE</h2>
       <p className={s.balance_sum}>{balance} UAH</p>
    </div>
  )
}

export default Balance;
