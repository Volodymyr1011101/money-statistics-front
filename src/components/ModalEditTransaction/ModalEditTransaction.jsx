import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {
  fetchAllTransactions,
  updateTransaction,
} from '../../redux/transaction/operations';

import Modal from '../UserAcountLayout/Modal/Modal';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm';
import { normalizeDate } from '../../helpers/normalizeDate';
import { refreshUserThunk } from '../../redux/auth/operations';

const ModalEditTransaction = ({ onClose, transaction }) => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const { date } = values;
    const newDate = normalizeDate(new Date(date));
    dispatch(
      updateTransaction({
        id: transaction.id,
        updatedData: { ...values, date: newDate },
      })
    )
      .unwrap()
      .then(() => {
        dispatch(fetchAllTransactions());
        dispatch(refreshUserThunk());
        onClose();
      })
      .catch(error => {
        toast.error(error);
      });
  };

  return (
    <Modal onClose={onClose}>
      <EditTransactionForm
        onClose={onClose}
        transaction={transaction}
        handleSubmit={handleSubmit}
        title="Edit transaction"
      />
    </Modal>
  );
};

export default ModalEditTransaction;
