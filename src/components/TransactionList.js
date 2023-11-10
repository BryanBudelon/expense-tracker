import React from "react";
import { useGlobalState } from "../zustand/GlobalState";
import { formatCurrency } from "../utils/format";

export const TransactionList = () => {
  const transactions = useGlobalState((state) => state.transactions);

  return (
    <>
      <h3>History</h3>

      <ul className="list">
        {!transactions.length && <span> No transactions. </span>}

        {transactions?.map((transaction) => (
          <Item {...transaction} />
        ))}
      </ul>
    </>
  );
};

const Item = ({ id, text, amount }) => {
  const del = useGlobalState((state) => state.del);

  return (
    <li key={id} className={amount < 0 ? "minus" : "plus"}>
      {text} <span>{formatCurrency.format(amount)}</span>
      <button class="delete-btn" onClick={() => del(id)}>
        x
      </button>
    </li>
  );
};
