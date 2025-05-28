import { useEffect, useState } from "react";
import * as Yup from "yup";
import s from "../ModalAddTransaction/ModalAddTransaction.module.css";
import CloseIcon from "../../UI/CloseIcon/CloseIcon";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../../UI/Button/Button";
import DataField from "../../UI/DataField/DataField";
import { FaRegCalendarAlt } from "react-icons/fa";
import FrontToggle from "../UserAcountLayout/FrontToggle/FrontToggle";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../../redux/transaction/operations";
import toast from "react-hot-toast";
import { refreshUserThunk } from "../../redux/auth/operations.js";
import { normalizeDate } from "../../helpers/normalizeDate";

const ModalAddTransaction = ({ onClose }) => {
  const dispatch = useDispatch();
  const { expense } = useSelector((state) => state.categories);
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const initialValues = {
    type: "expense",
    sum: null,
    date: new Date(),
    comment: "",
    category: "",
  };

  const validation = Yup.object().shape({
    type: Yup.string().required(),
    sum: Yup.number()
      .typeError("Must be a number")
      .positive("Must be greater than zero")
      .required("Required"),
    date: Yup.date().typeError("Invalid date").required("Required"),
    comment: Yup.string().max(100, "Max 100 characters"),
    category: Yup.string().when("type", {
      is: "expense",
      then: (schema) => schema.required("Category is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  const handleSubmit = async (values) => {
    try {
      const newDate = normalizeDate(values.date);
      await dispatch(
        createTransaction({
          ...values,
          date: newDate,
          category: values.type === "income" ? "Incomes" : values.category,
        })
      ).unwrap();
      onClose();
      dispatch(refreshUserThunk());
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className={s.backdrop} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <CloseIcon
          width="20"
          height="20"
          className={s.btn_close}
          onClose={onClose}
        />
        <h2 className={s.title}>Add transaction</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className={s.form}>
              <FrontToggle
                defaultType={values.type}
                onToggle={() => {
                  const newType =
                    values.type === "expense" ? "income" : "expense";
                  setFieldValue("type", newType);
                  setFieldValue("category", "");
                }}
              />
              {values.type === "expense" && (
                <div className={s.input_wrap}>
                  <Field className={s.form_select} as="select" name="category">
                    <option className={s.option} value="" disabled>
                      Category
                    </option>
                    {expense?.map((item) => (
                      <option
                        key={item._id}
                        className={s.option}
                        value={item.name}
                      >
                        {item.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="category"
                    component="div"
                    className={s.error}
                  />
                </div>
              )}
              <div className={s.wrapper_Tab}>
                <div className={s.input_wrap}>
                  <Field
                    className={s.form_input}
                    type="text"
                    name="sum"
                    placeholder="0.00"
                  />
                  <ErrorMessage
                    name="sum"
                    component="div"
                    className={s.error}
                  />
                </div>
                <div className={s.form_wrapper_data}>
                  <div className={s.input_wrap}>
                    <DataField name="date" className={s.form_input_data} />
                    <ErrorMessage
                      name="date"
                      component="div"
                      className={s.error}
                    />
                  </div>
                  <FaRegCalendarAlt className={s.icon} />
                </div>
              </div>

              <div className={s.input_wrap}>
                <Field
                  className={s.form_input}
                  type="text"
                  name="comment"
                  placeholder="Comment"
                />
                <ErrorMessage
                  name="comment"
                  component="div"
                  className={s.error}
                />
              </div>
              <div className={s.buttons_modal}>
                <Button className={s.btn_modal} type="submit">
                  Add
                </Button>
                <Button className={s.btn_modal} onClick={onClose}>
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ModalAddTransaction;
