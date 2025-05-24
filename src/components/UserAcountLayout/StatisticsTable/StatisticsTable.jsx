import React from 'react';
import s from './StatisticsTable.module.css';

const categoryColors = {
  'Main expenses': '#DFAD3F',
  Products: '#FFD8D0',
  Car: '#FD9498',
  'Self care': '#C5BAFF',
  'Child care': '#6E78E8',
  'Household products': '#4A56E2',
  Education: '#81E1FF',
  Leisure: '#24CCA7',
  'Other expenses': '#00AD84',
  Entertainment: '#ff9bd2',
};

const StatisticsTable = ({ transactions }) => {
  const expenseTransactions = transactions.filter((t) => t.type === 'expense');

  const categorySums = expenseTransactions.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = 0;
    }
    acc[curr.category] += curr.sum;
    return acc;
  }, {});

  const categoryList = Object.entries(categorySums).map(([name, sum]) => ({
    name,
    sum,
    color: categoryColors[name] || '#ccc',
  }));

  const total = categoryList.reduce((acc, { sum }) => acc + sum, 0);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <p className={s.colCategory}>Category</p>
        <p className={s.colSum}>Sum</p>
      </div>
      <div className={s.listConteiner} />
      <ul className={s.list}>
        {categoryList.map(({ name, sum, color }, idx) => (
          <li key={idx} className={s.item}>
            <div className={s.colCategory}>
              <span className={s.colorBox} style={{ backgroundColor: color }} />
              {name}
            </div>
            <div className={s.colSum}>
              {sum.toLocaleString(undefined, {
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
