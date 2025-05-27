import { useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useEffect, useState} from "react";

const DataField = ({ name, className }) => {
  const { setFieldValue, values } = useFormikContext();
  return (
    <DatePicker
      selected={values[name] || null}
      onChange={(date) => setFieldValue(name, date)}
      dateFormat="dd.MM.yyyy"
      placeholderText="11.11.2025"
      className={className}
    />
  );
}
  
export default DataField