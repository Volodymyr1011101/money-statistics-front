import React, { useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import css from "./StatisticsDashboard.module.css";

import { setSelectedMonth, setSelectedYear } from "../../../redux/filter/slice";
import {
  selectSelectedMonth,
  selectSelectedYear,
} from "../../../redux/filter/selectors";
import { fetchTransactions } from "../../../redux/transaction/operations";

const monthOptions = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const yearOptions = [
  { value: "2025", label: "2025" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
];

const StatisticsDashboard = () => {
  const dispatch = useDispatch();

  const selectedMonth = useSelector((state) => state.filters?.selectedMonth);
  const selectedYear = useSelector((state) => state.filters?.selectedYear);

  const defaultMonth = monthOptions.find(
    (option) => option.value === selectedMonth
  );
  const defaultYear = yearOptions.find(
    (option) => option.value === selectedYear
  );

  useEffect(() => {
    if (selectedMonth && selectedYear) {
      const period = `${selectedYear}-${selectedMonth}`;
      dispatch(fetchTransactions(period));
    }
  }, [dispatch, selectedMonth, selectedYear]);

  const handleMonthChange = (selectedOption) => {
    dispatch(setSelectedMonth(selectedOption.value));
  };

  const handleYearChange = (selectedOption) => {
    dispatch(setSelectedYear(selectedOption.value));
  };

  return (
    <div className={css.selectWrapper}>
      <Select
        className={css.selectContainer}
        classNamePrefix="select"
        onChange={handleMonthChange}
        options={monthOptions}
        value={defaultMonth}
      />
      <Select
        className={css.selectContainer}
        classNamePrefix="select"
        onChange={handleYearChange}
        options={yearOptions}
        value={defaultYear}
      />
    </div>
  );
};

export default StatisticsDashboard;
