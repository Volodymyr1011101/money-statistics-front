import { useState } from 'react'
import s from '../BtnExit/BtnExit.module.css'
import { RxExit } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { logOut } from '../../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const BtnExit = () => {

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setShowModal(false);

    try {
      const resultAction = await dispatch(logOut());

      if (logOut.rejected.match(resultAction)) {
        toast.error(resultAction.payload || 'Logout failed');
      }
    } catch (error) { 
      toast.error('Something went wrong');
    } finally {
      localStorage.clear();
      navigate('/login');
    }
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
