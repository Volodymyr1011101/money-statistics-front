import TransactionsItem from '../TransactionsItem/TransactionsItem';
import s from './TransactionsList.module.css';
import { useEffect, useRef, useState } from 'react';
import ModalEditTransaction from '../../ModalEditTransaction/ModalEditTransaction';
import ButtonAddTransaction from '../ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from '../../ModalAddTransaction/ModalAddTransaction';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../../../redux/transaction/selectors';

function TransactionsList() {
    const [showModalAddTransaction, setShowModalAddTransaction] =
        useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [showModalEditTransaction, setShowModalEditTransaction] =
        useState(false);
    const transactions = useSelector(selectTransactions);

    const scrollRef = useRef(null);

    // наразі поля не співпадають
    console.log(transactions);
    const handleEditClick = transaction => {
        setSelectedTransaction(transaction);
        setShowModalEditTransaction(true);
    };

    const handleModalStateChange = () => {
        setShowModalAddTransaction(prev => !prev);
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
                <div
                    className={`${s.container} ${s[`scroll-container`]}`}
                    ref={scrollRef}
                >
                    {!transactions ? (
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
