import React from 'react';
import s from './StatisticsTable.module.css';

const StatisticsTable = ({ transactions, total }) => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <p className={s.colCategory}>Category</p>
        <p className={s.colSum}>Sum</p>
      </div>
      <div className={s.listConteiner} />
      <ul className={s.list}>
        {transactions?.map(({ category, total, color }, idx) => (
          <li key={idx} className={s.item}>
            <div className={s.colCategory}>
              <span className={s.colorBox} style={{ backgroundColor: color }} />
              {category}
            </div>
            <div className={s.colSum}>
              {total?.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </li>
        ))}
      </ul>
      <div className={s.footer}>
        <span>Expenses:</span>
        <span className={s.total}>
          {total.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  );
};

export default StatisticsTable;
