import { useState } from 'react'
import s from '../BtnExit/BtnExit.module.css'
import { RxExit } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';

const BtnExit = () => {

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowModal(false);
    navigate('/login'); 
  };
    
  

  return (
    <>
    <button className={s.btn_exit} onClick={() => setShowModal(true)}>
        <RxExit className={s.svg_exit} />
      Exit</button>
      
      {showModal && (
        <Modal
          onConfirm={handleLogout}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

export default BtnExit
