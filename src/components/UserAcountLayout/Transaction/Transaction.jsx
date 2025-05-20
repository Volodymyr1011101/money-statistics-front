import { useDispatch } from 'react-redux';
import s from './Transaction.module.css';

function Transaction({ id, data, type, category, comment, sum }) {
  const dispatch = useDispatch();
  return (
    <div className={s.transactionContainer}>
      <div></div>
      <button onClick={() => dispatch(deleteTransaction(id))}>Delete</button>
    </div>
  );
}

export default Transaction;
