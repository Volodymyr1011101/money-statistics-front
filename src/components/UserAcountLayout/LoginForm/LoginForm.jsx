import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import { MdEmail } from "react-icons/md";
import { TbLockFilled } from "react-icons/tb";

import css from "./LoginForm.module.css";
import Button from "../../../UI/Button/Button";
import { loginThunk } from "../../../redux/auth/operations";

import Img from "../../../assets/currency_img.png";
import logo_modal from "../../../assets/Logo_modal.svg";
import Logo from "../../../UI/Logo/Logo";

import { emailRegex, passwordRegex } from "../../../helpers/constants";

const validation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .matches(
      emailRegex,
      "The email must contain @, start from letter, domain name(gmail), '.',  top-level domain (com)"
    )
    .required("Required field"),
  password: Yup.string()
    .required("Required field")
    .min(8, "Password must contain at least 8 characters")
    .max(64, "Password must be at most 64 characters long")
    .matches(
      passwordRegex,
      "The password must contain at least one number, one uppercase letter, and one lowercase letter"
    ),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = ({handleFlip}) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    dispatch(loginThunk(values))
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
      {({ isSubmitting, values, handleChange, errors, touched, status }) => (
        <Form className={css.loginContact}>
          <Logo img={logo_modal} className={css.logo} />
          <div className={css.loginInputWrap}>
            <Field
              className={clsx(css.loginInput, {
                [css.error]: errors.email && touched.email,
                [css.success]: touched.email && !errors.email,
              })}
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              value={values.email}
            />
            <MdEmail
              className={clsx(css.emailIcon, {
                [css.error]: errors.email && touched.email,
                [css.success]: touched.email && !errors.email,
              })}
            />

            <ErrorMessage
              className={css.loginErrorMessage}
              name="email"
              component="div"
            />
          </div>
          <div className={css.loginInputWrap}>
            <Field
              className={clsx(css.loginInput, {
                [css.error]: errors.password && touched.password,
                [css.success]: touched.password && !errors.password,
              })}
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
            />
            <TbLockFilled
              className={clsx(css.emailIcon, {
                [css.error]: errors.password && touched.password,
                [css.success]: touched.password && !errors.password,
              })}
            />
            <ErrorMessage
              className={css.loginErrorMessage}
              name="password"
              component="div"
            />
          </div>
          <Button
            className={css.loginButton}
            type="submit"
            disabled={isSubmitting}
          >
            Log in
          </Button>
            <Button className={css.registerButton} disabled={isSubmitting} onClick={handleFlip}>
              Register
            </Button>
          <img className={css.pocketImg} src={Img} />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
