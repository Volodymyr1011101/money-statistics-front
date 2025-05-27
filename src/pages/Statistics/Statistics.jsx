import StatisticsDashboard from '../../components/UserAcountLayout/Statistics/StatisticsDashboard';
import css from './Statistics.module.css';
import FrontToggle from '../../components/UserAcountLayout/FrontToggle/FrontToggle';
import StatisticsTable from '../../components/UserAcountLayout/StatisticsTable/StatisticsTable';
import MyChart from "../../UI/Chart/Chart";
import {useSelector} from "react-redux";

const Statistics = () => {
  const {items, total} = useSelector(state => state.transactions);

    const {balance} = useSelector(state => state.auth.user);
  return (
    <div className={css.statisticWrapper}>
      <div className={css.toggleChart}>
        <FrontToggle />
          <MyChart balance={balance} items={items} />
      </div>
      <div className={css.dashTable}>
        <StatisticsDashboard />
        <StatisticsTable transactions={items} total={total}/>
      </div>
    </div>
  );
};
export default Statistics;
