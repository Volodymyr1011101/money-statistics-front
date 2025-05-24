import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TransactionsList from "../components/UserAcountLayout/TransactionsList/TransactionsList";
import ButtonAddTransaction from "../components/UserAcountLayout/ButtonAddTransaction/ButtonAddTransaction";
// import ModalAddTransaction from "../components/UserAcountLayout/ModalAddTransaction/ModalAddTransaction";

import { fetchTransactions } from "../redux/transaction/operations";
import { fetchCategories } from "../redux/categories/operations";

import { selectIsLoggedIn } from "../redux/auth/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchTransactions());
      dispatch(fetchCategories());
    }
  }, [dispatch, isLoggedIn]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="home-tab">
      <TransactionsList />
      <ButtonAddTransaction onClick={openModal} />
      {/* {isModalOpen && <ModalAddTransaction onClose={closeModal} />} */}
    </section>
  );
};

export default Home;
