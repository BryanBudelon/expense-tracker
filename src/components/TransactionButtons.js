import React from "react";
import { useNavigate } from "react-router-dom";

export const TransactionButtons = () => {
  const navigate = useNavigate();

  const goToAddIncome = () => navigate("/AddIncome");
  const goToAddExpense = () => navigate("/AddExpense");

  return (
    <div>
      <button className="incomeBtn" onClick={goToAddIncome}>
        Add Income
      </button>

      <button className="expenseBtn" onClick={goToAddExpense}>
        Add Expense
      </button>
    </div>
  );
};
