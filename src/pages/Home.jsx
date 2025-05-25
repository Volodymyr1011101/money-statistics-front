import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TransactionsList from '../components/UserAcountLayout/TransactionsList/TransactionsList';

import { fetchTransactions } from '../redux/transaction/operations';
import { fetchCategories } from '../redux/categories/operations';

import { selectIsLoggedIn } from '../redux/auth/selectors';

const Home = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchTransactions());
      dispatch(fetchCategories());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <section className="home-tab">
      <TransactionsList />
    </section>
  );
};

export default Home;
