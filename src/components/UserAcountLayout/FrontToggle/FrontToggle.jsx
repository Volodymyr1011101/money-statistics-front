import React, { useState } from 'react';
import s from './FrontToggle.module.css';

const FrontToggle = ({ onToggle, type = 'expense' }) => {
  const [currentType, setCurrentType] = useState(type);

  const handleToggle = () => {
    const newType = currentType === 'expense' ? 'income' : 'expense';
    setCurrentType(newType);
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
