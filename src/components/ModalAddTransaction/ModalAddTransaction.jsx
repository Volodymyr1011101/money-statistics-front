import { useEffect } from 'react'
import * as Yup from "yup";
import s from '../ModalAddTransaction/ModalAddTransaction.module.css'
import CloseIcon from '../../UI/CloseIcon/CloseIcon'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Button from '../../UI/Button/Button'
import DataField from '../../UI/DataField/DataField'
import { FaRegCalendarAlt } from "react-icons/fa";


const ModalAddTransaction = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape')
        onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const initialValues = {
    sum: null,
    data: null,
    comment: ''
  };

  const validation = Yup.object().shape({
    sum: Yup.number()
    .typeError('Must be a number')
    .positive('Must be greater than zero')
    .required('Required'),
  data: Yup.date()
    .typeError('Invalid date')
    .required('Required'),
  comment: Yup.string()
    .max(100, 'Max 100 characters')
  });


  
  const handleSubmit = () => {

  };

  return (
    <div className={s.backdrop} onClick={onClose}>
    <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <CloseIcon
          width='20'
          height='20'
          className={s.btn_close}
          onClose = {onClose}
        />
      <h2 className={s.title}>Add transaction</h2>
      <h2>Toggle</h2>
      <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={handleSubmit}
      >
        <Form className={s.form}>
            <div className={s.wrapper_Tab}>
              <div className={s.input_wrap}>
                <Field
                  className={s.form_input}
                  type='text'
                  name='sum'
                  placeholder='0.00'
              />
                <ErrorMessage name="sum" component="div" className={s.error} />
              </div>
              <div className={s.form_wrapper_data}>
                <div className={s.input_wrap}>
                  <DataField name='data' className={s.form_input_data} />
                  <ErrorMessage name="data" component="div" className={s.error} />
                </div>
                  <FaRegCalendarAlt className={s.icon} />
                </div>
                
            </div>    
           
            <div className={s.input_wrap}>
              <Field
                className={s.form_input}
                type='text'
                name='comment'
                placeholder='Comment'
              />
              <ErrorMessage name="comment" component="div" className={s.error} />
            </div>
            <div className={s.buttons_modal}>
              <Button
                className={s.btn_modal}
                type='submit'
                onClick={handleSubmit}
              >Add 
              </Button>
              <Button
                className={s.btn_modal}
                onClick={onClose}>Cancel
              </Button>
            </div>
        </Form>    
      </Formik>
      </div>
    </div>
  
  )
}

export default ModalAddTransaction
