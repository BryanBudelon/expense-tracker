import React from "react";
import { useGlobalState } from "../zustand/GlobalState";
import { formatCurrency } from "../utils/format";

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
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{formatCurrency.format(totalIncomes)}</p>
      </div>

      <div>
        <h4>Expense</h4>
        <p className="money minus">{formatCurrency.format(totalExpenses)}</p>
      </div>
    </div>
  );
};
