import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? "minus" : "plus"}
          >
            {transaction.text} <span>{transaction.amount}</span>
            <button class="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </>
  );
};
