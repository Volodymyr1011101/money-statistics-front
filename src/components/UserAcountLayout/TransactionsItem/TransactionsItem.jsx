import { useDispatch } from 'react-redux';
import s from './TransactionsItem.module.css';
import { useMediaQuery } from 'react-responsive';

function TransactionsItem({ id, date, type, category, comment, sum }) {
  const dispatch = useDispatch();

  const isIncome = type === 'income';

  return (
    <div className={s.container}>
      {/* Mobile */}
      <div className={isIncome ? s.transactionIncome : s.transactionExpense}>
        <div className={s.row}>
          <span>Date</span>
          <span>{date}</span>
        </div>
        <div className={s.row}>
          <span>Type</span>
          <span>{isIncome ? '+' : '-'}</span>
        </div>
        <div className={s.row}>
          <span>Category</span>
          <span>{category}</span>
        </div>
        <div className={s.row}>
          <span>Comment</span>
          <span>{comment}</span>
        </div>
        <div className={s.row}>
          <span>Sum</span>
          <span className={isIncome ? s.income : s.expense}>
            {sum.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className={s.actions}>
          <button className={s.deleteButton}>Delete</button>
          <button className={s.editButton}>✎ Edit</button>
        </div>
      </div>

      {/* Tablet & Desktop */}
      <div className={s.tableBody}>
        <p>{date}</p>
        <p className={s.type}>{isIncome ? '+' : '-'}</p>
        <p>{category}</p>
        <p className={s.comment}>{comment}</p>
        <p>{sum}</p>
        <button className={s.editButton} onClick={() => handleEditClick(item)}>✎ </button>
        <button className={s.deleteButton}>Delete</button>
      </div>
    </div>
  );
}

export default TransactionsItem;
