import * as Yup from 'yup';
import s from './EditTransactionForm.module.css';
import CloseIcon from '../../UI/CloseIcon/CloseIcon';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Button from '../../UI/Button/Button';
import DataField from '../../UI/DataField/DataField';
import { FaRegCalendarAlt } from 'react-icons/fa';
import FrontToggle from '../UserAcountLayout/FrontToggle/FrontToggle';
import { categories } from '../../helpers/constants';

const EditTransactionForm = ({
  onClose,
  transaction,
  handleSubmit,
  title = 'Add transaction',
}) => {
  const initialValues = {
    category: transaction?.category || 'Other expenses',
    sum: transaction?.sum || '',
    date: transaction?.date || '',
    comment: transaction?.comment || '',
  };

  const validation = Yup.object().shape({
    sum: Yup.number()
      .min(0)
      .max(1000000)
      .typeError('Must be a number')
      .positive('Must be greater than zero'),
    date: Yup.date(),
    comment: Yup.string(),
  });

  return (
    <>
      <CloseIcon
        width="20"
        height="20"
        className={s.btn_close}
        onClose={onClose}
      />
      <h2 className={s.title}>{title}</h2>

      <div className={transaction.transactionType && s.disabledbutton}>
        <FrontToggle type={transaction.transactionType} />
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          {transaction.transactionType === 'expense' && (
            <Field className={s.form_input} name="category" as="select">
              {categories.map(item => (
                <option value={item}>{item}</option>
              ))}
            </Field>
          )}
          <div className={s.wrapper_Tab}>
            <div>
              <Field
                className={s.form_input}
                type="text"
                name="sum"
                placeholder="0.00"
              />
              <ErrorMessage name="sum" component="div" className={s.error} />
            </div>
            <div className={s.form_wrapper_data}>
              <DataField name="date" className={s.form_input_data} />
              <FaRegCalendarAlt className={s.icon} />
            </div>
          </div>
          <Field
            className={s.form_input}
            type="text"
            name="comment"
            placeholder="Comment"
          />
          <div className={s.buttons_modal}>
            <Button className={s.btn_modal} type="submit">
              Save Changes
            </Button>
            <Button className={s.btn_modal} onClick={onClose}>
              Cancel
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default EditTransactionForm;
