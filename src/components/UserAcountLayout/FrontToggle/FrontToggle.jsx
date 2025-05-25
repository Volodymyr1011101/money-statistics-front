import React, { useState } from 'react';
import s from './FrontToggle.module.css';

const FrontToggle = ({ onToggle }) => {
  const [type, setType] = useState('expense');

  const handleToggle = () => {
    const newType = type === 'expense' ? 'income' : 'expense';
    setType(newType);
    if (onToggle) onToggle(newType);
  };

  return (
    <div className={s.container}>
      <div className={s.labels}>
        <p>Income</p>
        <div className={s.switchWrapper} onClick={handleToggle}>
          <div className={s.switchContainer}>
            <div
              className={`${s.switchButton} ${
                type === 'income' ? s.income : s.expense
              }`}
            >
              {type === 'income' ? '+' : '−'}
            </div>
          </div>
        </div>
        <p>Expense</p>
      </div>
    </div>
  );
};

export default FrontToggle;
