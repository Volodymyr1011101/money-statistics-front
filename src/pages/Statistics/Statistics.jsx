import StatisticsDashboard from "../../components/UserAcountLayout/Statistics/StatisticsDashboard";
import css from "./Statistics.module.css";
import FrontToggle from "../../components/UserAcountLayout/FrontToggle/FrontToggle";
import StatisticsTable from "../../components/UserAcountLayout/StatisticsTable/StatisticsTable";

const Statistics = () => {
  return (
    <div className={css.statisticWrapper}>
      <div className={css.toggleChart}>
        <FrontToggle />
        <div>Chart</div>
      </div>
      <div className={css.dashTable}>
        <StatisticsDashboard />
        <StatisticsTable />
      </div>
    </div>
  );
};
export default Statistics;
