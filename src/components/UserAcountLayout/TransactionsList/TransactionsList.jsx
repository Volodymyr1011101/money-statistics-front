import s from "./TransactionsList.module.css";
import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ModalEditTransaction from "../../ModalEditTransaction/ModalEditTransaction";
import ButtonAddTransaction from "../ButtonAddTransaction/ButtonAddTransaction";
import ModalAddTransaction from "../../ModalAddTransaction/ModalAddTransaction";
import { useDispatch } from "react-redux";
import TransactionsItem from "../TransactionsItem/TransactionsItem";
import { fetchPaginatedTransactions } from "../../../redux/transaction/operations";

function TransactionsList() {
  const dispatch = useDispatch();
  const [showModalAddTransaction, setShowModalAddTransaction] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showModalEditTransaction, setShowModalEditTransaction] =
    useState(false);
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const perPage = 10;
  const scrollRef = useRef(null);

  const loadMoreTransactions = async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      const resultAction = await dispatch(
        fetchPaginatedTransactions({ page, perPage })
      );

      if (!resultAction.payload || !Array.isArray(resultAction.payload)) {
        console.error(
          "Invalid response or payload is not an array",
          resultAction.payload
        );
        setHasMore(false);
        return;
      }

      const newTransactions = resultAction.payload;

      if (newTransactions.length < perPage) {
        setHasMore(false);
      }

      setTransactions((prev) => [...prev, ...newTransactions]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error loading transactions:", error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMoreTransactions();
  }, []);

  const handleEditClick = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModalEditTransaction(true);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.transactionContainer}>
        <div className={s.tableHeader}>
          <p>Date</p>
          <p className={s.type}>Type</p>
          <p>Category</p>
          <p>Comment</p>
          <p>Sum</p>
        </div>

        <div
          id="scrollableDiv"
          className={`${s.container} ${s["scroll-container"]}`}
          ref={scrollRef}
        >
          <InfiniteScroll
            dataLength={transactions.length}
            next={loadMoreTransactions}
            hasMore={hasMore}
            endMessage={
              <p className={s.stub}>Yay! All transactions are uploaded.</p>
            }
            scrollableTarget="scrollableDiv"
          >
            {transactions.length === 0 && !isLoading ? (
              <p className={s.stub}>There are no transactions yet</p>
            ) : (
              transactions.map((item) => (
                <TransactionsItem
                  key={item._id}
                  transaction={item}
                  onEdit={() => handleEditClick(item)}
                />
              ))
            )}
          </InfiniteScroll>
        </div>

        <div className={s.fabContainer}>
          <ButtonAddTransaction className={s.fab} />
        </div>
      </div>

      {showModalAddTransaction && (
        <ModalAddTransaction
          onClose={() => setShowModalAddTransaction(false)}
        />
      )}

      {showModalEditTransaction && selectedTransaction && (
        <ModalEditTransaction
          onClose={() => setShowModalEditTransaction(false)}
          transaction={selectedTransaction}
        />
      )}
    </div>
  );
}

export default TransactionsList;
