import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './TransactionsItem.module.css';

import ModalEditTransaction from '../../ModalEditTransaction/ModalEditTransaction';
import ModalConfirmDelete from '../ModalConfirmDelete/ModalConfirmDelete.';
import { deleteTransaction } from '../../../redux/transaction/operations';
import { refreshUserThunk } from '../../../redux/auth/operations';

import { LuPencil } from 'react-icons/lu';

function TransactionsItem({ transaction, onEdit }) {
  const { _id, date, type, category, comment, sum } = transaction;
  const dispatch = useDispatch();
  const isIncome = type === 'income';

  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleEditClick = () => {
    setShowModalEdit(true);
  };

  const handleDeleteClick = () => {
    setShowModalDelete(true);
  };

  const handleConfirmDelete = async () => {
    await dispatch(deleteTransaction(_id)).unwrap();
    dispatch(refreshUserThunk());
    setShowModalDelete(false);
  };

  const formattedDate = new Date(date).toLocaleDateString('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  return (
    <div className={s.container}>
      {/* Mobile */}
      <div className={isIncome ? s.transactionIncome : s.transactionExpense}>
        <div className={s.row}>
          <span>Date</span>
          <span>{formattedDate}</span>
        </div>
        <div className={s.row}>
          <span>Type</span>
          <span>{isIncome ? '+' : '-'}</span>
        </div>
        <div className={s.row}>
          <span>Category</span>
          <span>{category}</span>
        </div>
        <div className={s.row}>
          <span>Comment</span>
          <span className={s.comment} title={comment}>
            {comment}
          </span>
        </div>

        <div className={s.row}>
          <span>Sum</span>
          <span className={isIncome ? s.income : s.expense}>
            {sum.toLocaleString('en-US', {
              minimumFractionDigits: 2,
            })}
          </span>
        </div>
        <div className={s.actions}>
          <button className={s.deleteButton} onClick={handleDeleteClick}>
            Delete
          </button>
          <div className={s.editButtonContainer} onClick={handleEditClick}>
            <LuPencil size={32} className={s.editButton} />
            <button className={s.editButton}>Edit</button>
          </div>
        </div>
      </div>

      {/* Tablet & Desktop */}
      <div className={s.tableBody}>
        <p>{formattedDate}</p>
        <p className={s.type}>{isIncome ? '+' : '-'}</p>
        <p>{category}</p>
        <p className={s.comment} title={comment}>
          {comment}
        </p>
        <p className={s.sum}>{sum}</p>
        <LuPencil
          size={28}
          className={s.editButton}
          onClick={handleEditClick}
        />
        <button className={s.deleteButton} onClick={handleDeleteClick}>
          Delete
        </button>
      </div>

      {showModalEdit && (
        <ModalEditTransaction
          transaction={{
            id: _id,
            date,
            type,
            category,
            comment,
            sum,
          }}
          onClose={() => setShowModalEdit(false)}
        />
      )}

      {showModalDelete && (
        <ModalConfirmDelete
          onConfirm={handleConfirmDelete}
          onCancel={() => setShowModalDelete(false)}
        />
      )}
    </div>
  );
}

export default TransactionsItem;
