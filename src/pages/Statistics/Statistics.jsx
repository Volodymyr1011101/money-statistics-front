import StatisticsDashboard from '../../components/UserAcountLayout/Statistics/StatisticsDashboard';
import css from './Statistics.module.css';
import FrontToggle from '../../components/UserAcountLayout/FrontToggle/FrontToggle';
import StatisticsTable from '../../components/UserAcountLayout/StatisticsTable/StatisticsTable';

const Statistics = () => {
  const transactions = [
    {
      id: '1',
      date: '2025-05-01',
      type: 'income',
      category: 'Incomes',
      comment: 'Salary for April ',
      sum: 2000,
    },
    {
      id: '2',
      date: '2025-05-02',
      type: 'expense',
      category: 'Products',
      comment: 'Groceries',
      sum: 75,
    },
    {
      id: '3',
      date: '2025-05-03',
      type: 'expense',
      category: 'Car',
      comment: 'Gasoline',
      sum: 50,
    },
    {
      id: '4',
      date: '2025-05-04',
      type: 'income',
      category: 'Incomes',
      comment: 'Freelance project',
      sum: 500,
    },
    {
      id: '5',
      date: '2025-05-05',
      type: 'expense',
      category: 'Leisure',
      comment: 'Cinema',
      sum: 20,
    },
    {
      id: '6',
      date: '2025-05-06',
      type: 'expense',
      category: 'Education',
      comment: 'Online course',
      sum: 100,
    },
    {
      id: '7',
      date: '2025-05-07',
      type: 'expense',
      category: 'Self care',
      comment: 'Haircut',
      sum: 30,
    },
    {
      id: '8',
      date: '2025-05-08',
      type: 'income',
      category: 'Incomes',
      comment: 'Bonus',
      sum: 300,
    },
    {
      id: '9',
      date: '2025-05-09',
      type: 'expense',
      category: 'Entertainment',
      comment: 'Concert ticket',
      sum: 60,
    },
    {
      id: '10',
      date: '2025-05-10',
      type: 'expense',
      category: 'Household products',
      comment: 'Cleaning supplies',
      sum: 25,
    },
    {
      id: '1',
      date: '2025-05-01',
      type: 'income',
      category: 'Incomes',
      comment: 'Salary for April ',
      sum: 2000,
    },
    {
      id: '2',
      date: '2025-05-02',
      type: 'expense',
      category: 'Products',
      comment: 'Groceries',
      sum: 75,
    },
    {
      id: '3',
      date: '2025-05-03',
      type: 'expense',
      category: 'Car',
      comment: 'Gasoline',
      sum: 50,
    },
    {
      id: '4',
      date: '2025-05-04',
      type: 'income',
      category: 'Incomes',
      comment: 'Freelance project',
      sum: 500,
    },
    {
      id: '5',
      date: '2025-05-05',
      type: 'expense',
      category: 'Leisure',
      comment: 'Cinema',
      sum: 20,
    },
    {
      id: '6',
      date: '2025-05-06',
      type: 'expense',
      category: 'Education',
      comment: 'Online course',
      sum: 100,
    },
    {
      id: '7',
      date: '2025-05-07',
      type: 'expense',
      category: 'Self care',
      comment: 'Haircut',
      sum: 130,
    },
    {
      id: '8',
      date: '2025-05-08',
      type: 'income',
      category: 'Incomes',
      comment: 'Bonus',
      sum: 300,
    },
    {
      id: '9',
      date: '2025-05-09',
      type: 'expense',
      category: 'Entertainment',
      comment: 'Concert ticket',
      sum: 620,
    },
    {
      id: '10',
      date: '2025-05-10',
      type: 'expense',
      category: 'Household products',
      comment: 'Cleaning supplies',
      sum: 250,
    },
  ];

  return (
    <div className={css.statisticWrapper}>
      <div className={css.toggleChart}>
        <FrontToggle />
        <div>Chart</div>
      </div>
      <div className={css.dashTable}>
        <StatisticsDashboard />
        <StatisticsTable transactions={transactions} />
      </div>
    </div>
  );
};
export default Statistics;
