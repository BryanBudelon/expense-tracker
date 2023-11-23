import React from "react";
import { useNavigate } from "react-router-dom";
import { IncomeButton, ExpenseButton } from "./Button";
import { ButtonContainer } from "./ButtonContainer";

export const TransactionButtons = () => {
  const navigate = useNavigate();

  const goToAddIncome = () => navigate("/AddIncome");
  const goToAddExpense = () => navigate("/AddExpense");

  return (
    <ButtonContainer>
      <IncomeButton onClick={goToAddIncome}>Add Income</IncomeButton>

      <ExpenseButton onClick={goToAddExpense}>Add Expense</ExpenseButton>
    </ButtonContainer>
  );
};
