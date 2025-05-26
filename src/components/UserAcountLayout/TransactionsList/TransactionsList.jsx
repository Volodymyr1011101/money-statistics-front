import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../../../redux/transaction/selectors';

import s from './TransactionsList.module.css';

import TransactionsItem from '../TransactionsItem/TransactionsItem';
import ModalEditTransaction from '../../ModalEditTransaction/ModalEditTransaction';
import ButtonAddTransaction from '../ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from '../../ModalAddTransaction/ModalAddTransaction';

function TransactionsList() {
  const [showModalAddTransaction, setShowModalAddTransaction] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showModalEditTransaction, setShowModalEditTransaction] =
    useState(false);

  const transactions = useSelector(
    (state) => selectTransactions(state)?.result || []
  );

  const handleEditClick = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModalEditTransaction(true);
  };

  const handleModalStateChange = () => {
    setShowModalAddTransaction((prev) => !prev);
  };

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
        <div className={`${s.container} ${s[`scroll-container`]}`}>
          {transactions.length === 0 ? (
            <p className={s.stub}>There are no transactions yet</p>
          ) : (
            <>
              {transactions.map((item, index) => (
                <TransactionsItem
                  key={item.id}
                  transaction={item}
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
