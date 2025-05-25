import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { updateTransaction } from '../../redux/transaction/operations';

import Modal from '../UserAcountLayout/Modal/Modal';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm';

const ModalEditTransaction = ({ onClose, transaction }) => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    //TODO: наразі проблема на бекенді - поля "comment" нема i повертається помилка "comment" is not allowed"
    dispatch(updateTransaction({ id: transaction.id, updatedData: values }))
      .unwrap()
      .then(() => onClose())
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
