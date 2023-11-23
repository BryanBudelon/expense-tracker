import React from "react";
import { useGlobalState } from "../zustand/GlobalState";
import { formatCurrency } from "../utils/format";
import { DeleteButton } from "./Button";
import { UIList, UIListItem } from "./List";

export const TransactionList = () => {
  const transactions = useGlobalState((state) => state.transactions);

  return (
    <>
      <h3>History</h3>

      <UIList>
        {!transactions.length && <span> No transactions. </span>}

        {transactions?.map((transaction) => (
          <Item {...transaction} />
        ))}
      </UIList>
    </>
  );
};

const Item = ({ id, text, amount }) => {
  const del = useGlobalState((state) => state.del);

  return (
    <UIListItem key={id} type={amount < 0 ? "minus" : "plus"}>
      {text} <span>{formatCurrency.format(amount)}</span>
      <DeleteButton onClick={() => del(id)}>X</DeleteButton>
    </UIListItem>
  );
};
