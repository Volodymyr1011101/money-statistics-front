import React, {useEffect, useState} from 'react';
import s from './FrontToggle.module.css';
import {useDispatch, useSelector} from "react-redux";
import {resetTransactionsType, setTransactionsType} from "../../../redux/filter/slice";
import {fetchTransactions} from "../../../redux/transaction/operations";

const FrontToggle = ({ onToggle, defaultType = 'expense' }) => {
  const dispatch = useDispatch();

  const [currentType, setCurrentType] = useState(defaultType);

  const selectedMonth = useSelector((state) => state.filters?.selectedMonth);
  const selectedYear = useSelector((state) => state.filters?.selectedYear);
  const type = useSelector((state) => state.filters?.transactionsTypes);

  const period = `${selectedYear}-${selectedMonth}`;

  const handleToggle = async () => {
    const newType = currentType === 'expense' ? 'income' : 'expense';
    setCurrentType(newType);
    await dispatch(setTransactionsType(newType));
    if (newType) {
      dispatch(fetchTransactions({period, type: newType}))
    }
    if (onToggle) onToggle(newType);
  };

  useEffect(() => {
    return () => {
      dispatch(resetTransactionsType());
    }
  }, [])
  return (
    <div className={s.container}>
      <div className={s.labels}>
        <p>Income</p>
        <div className={s.switchWrapper} onClick={handleToggle}>
          <div className={s.switchContainer}>
            <div
              className={`${s.switchButton} ${
                currentType === 'income' ? s.income : s.expense
              }`}
            >
              {currentType === 'income' ? '+' : '−'}
            </div>
          </div>
        </div>
        <p>Expense</p>
      </div>
    </div>
  );
};

export default FrontToggle;
