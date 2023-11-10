import React from "react";
import { useGlobalState } from "../zustand/GlobalState";
import { formatCurrency } from "../utils/format";

export const Balance = () => {
  const all = useGlobalState((state) => state.transactions);
  const total = all.reduce((n, { amount }) => Number(n) + Number(amount), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{formatCurrency.format(total)}</h1>
    </>
  );
};
