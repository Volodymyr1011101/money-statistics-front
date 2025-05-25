import React from 'react';
import logo_modal from '../../../assets/Logo_modal.svg';
import Logo from '../../../UI/Logo/Logo.jsx';
import s from './ModalConfirmDelete.module.css';
import Button from '../../../UI/Button/Button.jsx';

const ModalConfirmDelete = ({ onCancel, onConfirm }) => {
  return (
    <div className={s.backdrop} onClick={onCancel}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <Logo img={logo_modal} className={s.logo_modal} />
        <p className={s.text_modal}>Are you sure you want to Delete?</p>
        <div className={s.buttons_modal}>
          <Button className={`${s.btn} ${s.btnDelete}`} onClick={onConfirm}>
            Delete
          </Button>
          <Button className={`${s.btn} ${s.btnCancel}`} onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmDelete;
