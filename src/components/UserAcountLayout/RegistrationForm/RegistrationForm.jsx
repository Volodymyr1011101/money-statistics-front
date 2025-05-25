import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useId } from "react";
import PasswordStrengthBar from "react-password-strength-bar";
import clsx from "clsx";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import toast from "react-hot-toast";

import { register } from "../../../redux/auth/operations";
import Logo from "../../../UI/Logo/Logo";
import css from "./RegistrationForm.module.css";
import logo_modal from "../../../assets/Logo_modal.svg";
import { passwordRegex } from "../../../helpers/constants";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validation = Yup.object().shape({
  name: Yup.string().required("Required field"),
  email: Yup.string()
    .required("Required field")
    .matches(emailRegex, "Invalid email format"),
  password: Yup.string()
    .required("Required field")
    .min(8, "Password must contain at least 8 characters")
    .matches(
      passwordRegex,
      "Password must contain at least one number, one uppercase letter, and one lowercase letter"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("Required field"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegistrationForm = ({ handleFlip }) => {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();

  const handleSubmit = async (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .catch((error) => {
        toast.error(error);
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, touched, errors }) => (
        <Form className={css.registerContact}>
          <Logo img={logo_modal} className={css.logo} />

          <div className={css.registerInputWrap}>
            <Field
              className={clsx(css.registerInput, {
                [css.error]: errors.name && touched.name,
                [css.success]: touched.name && !errors.name,
              })}
              type="text"
              name="name"
              id={nameId}
              placeholder="Name"
            />
            <FaUser
              className={clsx(css.registerIcon, {
                [css.error]: errors.name && touched.name,
                [css.success]: touched.name && !errors.name,
              })}
            />
            <ErrorMessage
              className={css.registerErrorMessage}
              name="name"
              component="div"
            />
          </div>

          <div className={css.registerInputWrap}>
            <Field
              className={clsx(css.registerInput, {
                [css.error]: errors.email && touched.email,
                [css.success]: touched.email && !errors.email,
              })}
              type="email"
              name="email"
              id={emailId}
              placeholder="E-mail"
            />
            <FaEnvelope
              className={clsx(css.registerIcon, {
                [css.error]: errors.email && touched.email,
                [css.success]: touched.email && !errors.email,
              })}
            />
            <ErrorMessage
              className={css.registerErrorMessage}
              name="email"
              component="div"
            />
          </div>

          <div className={css.registerInputWrap}>
            <Field
              className={clsx(css.registerInput, {
                [css.error]: errors.password && touched.password,
                [css.success]: touched.password && !errors.password,
              })}
              type="password"
              name="password"
              id={passwordId}
              placeholder="Password"
            />
            <FaLock
              className={clsx(css.registerIcon, {
                [css.error]: errors.password && touched.password,
                [css.success]: touched.password && !errors.password,
              })}
            />
            <ErrorMessage
              className={css.registerErrorMessage}
              name="password"
              component="div"
            />
          </div>

          <div className={css.registerInputWrap}>
            {" "}
            <Field
              className={css.registerInput}
              type="password"
              name="confirmPassword"
              id={confirmPasswordId}
              placeholder="Confirm Password"
            />
            <FaLock
              className={clsx(css.registerIcon, {
                [css.error]: errors.confirmPassword && touched.confirmPassword,
                [css.success]:
                  touched.confirmPassword && !errors.confirmPassword,
              })}
            />
            <ErrorMessage
              className={css.registerErrorMessage}
              name="confirmPassword"
              component="div"
            />
          </div>

          {/* {touched.confirmPassword && values.confirmPassword && (
            <PasswordStrengthBar
              password={values.confirmPassword}
              minLength={8}
              barColors={[
                "#ff4d4d",
                "#ff8000",
                "#ffff00",
                "#99cc00",
                "#00cc00",
              ]}
              scoreWords={
                values.confirmPassword !== values.password
                  ? [
                      "Does not match",
                      "Still wrong",
                      "Mismatch",
                      "Almost",
                      "Match",
                    ]
                  : ["Weak", "Fair", "Good", "Strong", "Perfect"]
              }
              shortScoreWord="Too short"
              style={{ marginBottom: "1rem" }}
            />
          )} */}
          <button
            className={css.registerButton}
            type="submit"
            disabled={isSubmitting}
          >
            Register
          </button>
          <button
            type="button"
            className={css.loginButton}
            onClick={handleFlip}
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
