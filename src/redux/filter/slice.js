import { createSlice } from "@reduxjs/toolkit";

const currentDate = new Date();
const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
const currentYear = String(currentDate.getFullYear());

const initialState = {
  selectedMonth: currentMonth,
  selectedYear: currentYear,
  transactionsTypes: 'expense'

};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectedMonth(state, action) {
      state.selectedMonth = action.payload;
    },
    setSelectedYear(state, action) {
      state.selectedYear = action.payload;
    },
    setTransactionsType(state, action) {
      state.transactionsTypes = action.payload;
    },
    resetTransactionsType(state, action) {
      state.transactionsTypes = initialState.transactionsTypes;
    }
  },
});

export const { setSelectedMonth, setSelectedYear, setTransactionsType, resetTransactionsType } = filterSlice.actions;
export default filterSlice.reducer;
