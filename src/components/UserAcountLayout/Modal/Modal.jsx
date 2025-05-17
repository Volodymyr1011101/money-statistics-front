import React from 'react'
import logo_modal from '../../../assets/Logo_modal.svg'
import Logo from '../../../UI/Logo/Logo.jsx'
import s from './Modal.module.css';
import Button from '../../../UI/Button/Button.jsx';

const Modal = ({ onClose, onConfirm }) => {
  return (
      <div className={s.backdrop} onClick={onClose}>
        <div className={s.modal} onClick={e => e.stopPropagation()}>
            <Logo img={logo_modal} className={s.logo_modal} />
            <p className={s.text_modal}>Are you sure you want to log out?</p>
            <div className={s.buttons_modal}>
                <Button className={s.btn_modal} onClick={onConfirm}>Logout</Button>
                <Button className={s.btn_modal} onClick={onClose}>Cancel</Button>
            </div>
        </div>
    </div>
  )
}

export default Modal
