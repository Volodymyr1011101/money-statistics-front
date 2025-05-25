import React, { useState } from 'react';
import s from './ButtonAddTransaction.module.css';

import ModalAddTransaction from '../../ModalAddTransaction/ModalAddTransaction';

const ButtonAddTransaction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className={s.container} onClick={toggleModal}>
        <div className={s.horizontal}></div>
        <div className={s.vertical}></div>
      </div>

      {isModalOpen && <ModalAddTransaction onClose={toggleModal} />}
    </>
  );
};

export default ButtonAddTransaction;
