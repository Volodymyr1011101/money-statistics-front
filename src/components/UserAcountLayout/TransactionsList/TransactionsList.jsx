import TransactionsItem from '../TransactionsItem/TransactionsItem';
import s from './TransactionsList.module.css';
import {useRef, useState} from 'react';
import ModalEditTransaction from '../../ModalEditTransaction/ModalEditTransaction';
import ButtonAddTransaction from '../ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from "../../ModalAddTransaction/ModalAddTransaction";


function TransactionsList() {
  const [showModalAddTransaction, setShowModalAddTransaction] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showModalEditTransaction, setShowModalEditTransaction] =
    useState(false);

  // const transactions = useSelector(selectTransactions);

  const scrollRef = useRef(null);

  //TODO: потрібно видалити після того як реалізується отримання даних Transactions від бекенду.
  // наразі поля не співпадаютью
  const transactions = [
    {
      id: '1',
      date: '2025-05-01',
      transactionType: 'income',
      category: 'Incomes',
      comment: 'Salary for April ',
      sum: 2000,
    },
    {
      id: '2',
      date: '2025-05-02',
      transactionType: 'expense',
      category: 'Products',
      comment: 'Groceries',
      sum: 75,
    },
    {
      id: '3',
      date: '2025-05-03',
      transactionType: 'expense',
      category: 'Car',
      comment: 'Gasoline',
      sum: 50,
    },
    {
      id: '4',
      date: '2025-05-04',
      transactionType: 'income',
      category: 'Incomes',
      comment: 'Freelance project',
      sum: 500,
    },
    {
      id: '5',
      date: '2025-05-05',
      transactionType: 'expense',
      category: 'Leisure',
      comment: 'Cinema',
      sum: 20,
    },
    {
      id: '6',
      date: '2025-05-06',
      transactionType: 'expense',
      category: 'Education',
      comment: 'Online course',
      sum: 100,
    },
    {
      id: '7',
      date: '2025-05-07',
      transactionType: 'expense',
      category: 'Self care',
      comment: 'Haircut',
      sum: 30,
    },
    {
      id: '8',
      date: '2025-05-08',
      transactionType: 'income',
      category: 'Incomes',
      comment: 'Bonus',
      sum: 300,
    },
    {
      id: '9',
      date: '2025-05-09',
      transactionType: 'expense',
      category: 'Entertainment',
      comment: 'Concert ticket',
      sum: 60,
    },
    {
      id: '10',
      date: '2025-05-10',
      transactionType: 'expense',
      category: 'Household products',
      comment: 'Cleaning supplies',
      sum: 25,
    },
    {
      id: '1',
      date: '2025-05-01',
      transactionType: 'income',
      category: 'Incomes',
      comment: 'Salary for April ',
      sum: 2000,
    },
    {
      id: '2',
      date: '2025-05-02',
      transactionType: 'expense',
      category: 'Products',
      comment: 'Groceries',
      sum: 75,
    },
    {
      id: '3',
      date: '2025-05-03',
      transactionType: 'expense',
      category: 'Car',
      comment: 'Gasoline',
      sum: 50,
    },
    {
      id: '4',
      date: '2025-05-04',
      transactionType: 'income',
      category: 'Incomes',
      comment: 'Freelance project',
      sum: 500,
    },
    {
      id: '5',
      date: '2025-05-05',
      transactionType: 'expense',
      category: 'Leisure',
      comment: 'Cinema',
      sum: 20,
    },
    {
      id: '6',
      date: '2025-05-06',
      transactionType: 'expense',
      category: 'Education',
      comment: 'Online course',
      sum: 100,
    },
    {
      id: '7',
      date: '2025-05-07',
      transactionType: 'expense',
      category: 'Self care',
      comment: 'Haircut',
      sum: 30,
    },
    {
      id: '8',
      date: '2025-05-08',
      transactionType: 'income',
      category: 'Incomes',
      comment: 'Bonus',
      sum: 300,
    },
    {
      id: '9',
      date: '2025-05-09',
      transactionType: 'expense',
      category: 'Entertainment',
      comment: 'Concert ticket',
      sum: 60,
    },
    {
      id: '10',
      date: '2025-05-10',
      transactionType: 'expense',
      category: 'Household products',
      comment: 'Cleaning supplies',
      sum: 25,
    },
  ];
  const handleEditClick = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModalEditTransaction(true);
  };

 const handleModalStateChange = () => {
   setShowModalAddTransaction((prev) => !prev );
 }

  return (
    <div className={s.wrapper}>
      <div className={s.transactionContainer}>
        <div className={s.tableHeader}>
          <p>Date</p>
          <p className={s.type}>Type</p>
          <p>Category</p>
          <p>Comment</p>
          <p>Sum</p>
        </div>
        <div
          className={`${s.container} ${s[`scroll-container`]}`}
          ref={scrollRef}
        >
          {transactions.length === 0 ? (
            <p className={s.stub}>There are no transactions yet</p>
          ) : (
            <>
              {transactions.map((item, index) => (
                <TransactionsItem
                  key={item.id + item.sum + index}
                  id={item.id}
                  date={item.date}
                  type={item.transactionType}
                  category={item.category}
                  comment={item.comment}
                  sum={item.sum}
                  onEdit={() => handleEditClick(item)}
                />
              ))}
            </>
          )}
        </div>
        <div className={s.fabContainer}>
          <ButtonAddTransaction className={s.fab} />
        </div>
      </div>

      {showModalAddTransaction && (
        <ModalAddTransaction
          onClose={() => setShowModalAddTransaction(false)}
        />
      )}

      {showModalEditTransaction && selectedTransaction && (
        <ModalEditTransaction
          onClose={() => {
            setShowModalEditTransaction(false);
          }}
          transaction={selectedTransaction}
        />
      )}
    </div>
  );
}

export default TransactionsList;
