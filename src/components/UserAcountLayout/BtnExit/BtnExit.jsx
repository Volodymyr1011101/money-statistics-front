import { useState } from 'react';
import s from '../BtnExit/BtnExit.module.css';
import { RxExit } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { logOut } from '../../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import logo_modal from '../../../assets/Logo_modal.svg';
import Logo from '../../../UI/Logo/Logo.jsx';
import Button from '../../../UI/Button/Button.jsx';

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
        Exit
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Logo img={logo_modal} className={s.logo_modal} />
          <p className={s.text_modal}>Are you sure you want to log out?</p>
          <div className={s.buttons_modal}>
            <Button className={s.btn_modal} onClick={handleLogout}>
              Logout
            </Button>
            <Button className={s.btn_modal} onClick={() => setShowModal(false)}>
              Cancel
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default BtnExit;
