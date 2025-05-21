import { useSelector } from 'react-redux';
import Transaction from '../Transaction/Transaction';
import s from './TransactionList.module.css';
import { selectTransactions } from '../../redux/selectors';

function TransactionList() {
  const transactions = useSelector(selectTransactions);

  return (
    <div className={s.container}>
      {transactions.length === 0 ? (
        <p>There are no transactions yet</p>
      ) : (
        transactions.map((item) => (
          <Transaction
            key={item.id}
            id={item.id}
            data={item.data}
            type={item.type}
            category={item.category}
            comment={item.comment}
            sum={item.sum}
          />
        ))
      )}
    </div>
  );
}

export default TransactionList;
