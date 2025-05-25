import { useEffect } from 'react';
import * as Yup from "yup";
import s from '../ModalEditTransaction/ModalEditTransaction.module.css';
import CloseIcon from '../../UI/CloseIcon/CloseIcon';
import { Field, Form, Formik } from 'formik';
import Button from '../../UI/Button/Button';
import DataField from '../../UI/DataField/DataField';
import { FaRegCalendarAlt } from "react-icons/fa";

const ModalEditTransaction = ({ onClose, transaction }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const initialValues = {
    sum: transaction?.sum || '',
    data: transaction?.data || '',
    comment: transaction?.comment || ''
  };

  const validation = Yup.object().shape({
    sum: Yup.string(),
    data: Yup.date(),
    comment: Yup.string()
  });

  const handleSubmit = (values) => {
    console.log("Updated transaction:", values);
    onClose();
  };

  return (
    <div className={s.backdrop} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <CloseIcon width='20' height='20' className={s.btn_close} onClick={onClose} />
        <h2 className={s.title}>Edit transaction</h2>

        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={handleSubmit}>
          <Form className={s.form}>
            <div className={s.wrapper_Tab}>
              <Field className={s.form_input} type='text' name='sum' placeholder='0.00' />
              <div className={s.form_wrapper_data}>
                <DataField name='data' className={s.form_input_data} />
                <FaRegCalendarAlt className={s.icon} />
              </div>
            </div>    

            <Field className={s.form_input} type='text' name='comment' placeholder='Comment' />

            <div className={s.buttons_modal}>
              <Button className={s.btn_modal} type='submit'>Save Changes</Button>
              <Button className={s.btn_modal} onClick={onClose}>Cancel</Button>
            </div>
          </Form>    
        </Formik>
      </div>
    </div>
  );
};

export default ModalEditTransaction;
