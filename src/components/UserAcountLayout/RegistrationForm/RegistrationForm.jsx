import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useMediaQuery } from 'react-responsive'; 

import { register } from '../../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validation = Yup.object().shape({
  email: Yup.string()
    .required('Required field')
    .matches(emailRegex, 'Invalid email format'),
  password: Yup.string()
    .required('Required field')
    .min(8, 'Password must contain at least 8 characters')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
      'The password must contain at least one number, one uppercase letter, and one lowercase letter'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .required('Required field'),
});

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

const RegistrationForm = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form
          className={
            isMobile
              ? `${css.registerContact} ${css.mobile}`
              : css.registerContact
          }
        >
          <label className={css.registerLabel} htmlFor={emailId}>
            Email
          </label>
          <div className={css.registerInputWrap}>
            <Field
              className={css.registerInput}
              type="email"
              name="email"
              id={emailId}
            />
            <ErrorMessage
              className={css.registerErrorMessage}
              name="email"
              component="div"
            />
          </div>

          <label className={css.registerLabel} htmlFor={passwordId}>
            Password
          </label>
          <div className={css.registerInputWrap}>
            <Field
              className={css.registerInput}
              type="password"
              name="password"
              id={passwordId}
            />
            <ErrorMessage
              className={css.registerErrorMessage}
              name="password"
              component="div"
            />
          </div>

          <label className={css.registerLabel} htmlFor={confirmPasswordId}>
            Confirm Password
          </label>
          <div className={css.registerInputWrap}>
            <Field
              className={css.registerInput}
              type="password"
              name="confirmPassword"
              id={confirmPasswordId}
            />
            <ErrorMessage
              className={css.registerErrorMessage}
              name="confirmPassword"
              component="div"
            />
          </div>

          <PasswordStrengthBar
            password={values.password}
            onChangeScore={() => {}}
            barColors={{
              0: '#ff4d4d',
              1: '#ff8000',
              2: '#ffff00',
              3: '#99cc00',
              4: '#00cc00',
            }}
            style={{ marginBottom: '1rem' }}
            scoreWords={[
              'Недостатньо',
              'Слабкий',
              'Помірний',
              'Добрий',
              'Відмінний',
            ]}
          />

          <button
            className={css.registerButton}
            type="submit"
            disabled={isSubmitting}
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
