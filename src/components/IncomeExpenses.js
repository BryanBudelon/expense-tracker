import React from "react";
import { useGlobalState } from "../zustand/GlobalState";
import { formatCurrency } from "../utils/format";
import { UIIncExpView } from "./IncExpView";
import { Money } from "./Money";
import { UIIncText } from "./Text";

export const IncomeExpenses = () => {
  const all = useGlobalState((state) => state.transactions);
  const incomes = all.filter((item) => item.amount >= 0);
  const expenses = all.filter((item) => item.amount < 0);

  const totalIncomes = incomes.reduce(
    (n, { amount }) => Number(n) + Number(amount),
    0
  );

  const totalExpenses = expenses.reduce(
    (n, { amount }) => Number(n) + Number(amount),
    0
  );

  return (
    <UIIncExpView>
      <div>
        <h4>Income</h4>
        <Money type="plus">{formatCurrency.format(totalIncomes)}</Money>
        {/* <p className="money plus">{formatCurrency.format(totalIncomes)}</p> */}
      </div>

      <div>
        <h4>Expense</h4>
        <Money type="minus">{formatCurrency.format(totalExpenses)}</Money>
      </div>
    </UIIncExpView>
  );
};
