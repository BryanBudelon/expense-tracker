import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGlobalState } from "../zustand/GlobalState";
import { UIInput } from "../components/Input";
import { AddButton } from "../components/Button";
import { UIIncomePage } from "../components/IncomePage";
import { GlobalStyle } from "../utils/GlobalStyle";

export function AddExpense() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const add = useGlobalState((state) => state.add);
  return (
    <UIIncomePage>
      <GlobalStyle />
      <h2>Adding Expense</h2>
      <p>Description</p>
      <UIInput
        type="text"
        value={text}
        onChange={(text) => setText(text.target.value)}
        placeholder="Description"
      ></UIInput>
      <p>Amount</p>
      <UIInput
        type="number"
        value={amount}
        onChange={(amount) => setAmount(amount.target.value)}
        placeholder="Amount"
      ></UIInput>
      <AddButton
        className="btn"
        onClick={() => {
          add({
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: amount * -1,
          });
          goBack();
        }}
      >
        Add
      </AddButton>
    </UIIncomePage>
  );
}
