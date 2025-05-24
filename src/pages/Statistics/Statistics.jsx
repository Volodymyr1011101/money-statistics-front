import StatisticsDashboard from "../../components/UserAcountLayout/Statistics/StatisticsDashboard";
import css from "./Statistics.module.css";

const Statistics = () => {
  return (
    <div className={css.statisticWrapper}>
      <div className={css.toggleChart}>
        <div>Toggle</div>
        <div>Chart</div>
      </div>
      <div className={css.dashTable}>
        <StatisticsDashboard />
        <div>StatisticsTable</div>
      </div>
    </div>
  );
};
export default Statistics;
