import React, { useState } from "react";
import { useGlobalState } from "../zustand/GlobalState";
import { useNavigate } from "react-router-dom";
import { AddButton } from "../components/Button";
import { UIIncomePage } from "../components/IncomePage";
import { UIInput } from "../components/Input";
import { GlobalStyle } from "../utils/GlobalStyle";

export function AddIncome() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const add = useGlobalState((state) => state.add);
  return (
    <UIIncomePage>
      <GlobalStyle />

      <h2>Adding Income</h2>
      <p>Description</p>

      <UIInput
        type="text"
        className="txText"
        value={text}
        onChange={(text) => setText(text.target.value)}
        placeholder="Description"
      ></UIInput>
      <p>Amount</p>

      <UIInput
        className="txAmount"
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={amount !== 0 ? amount : ""}
        onChange={(amount) => setAmount(amount.target.value)}
        placeholder="Amount"
      ></UIInput>
      <AddButton
        onClick={() => {
          add({
            id: Math.floor(Math.random() * 100000000),
            text,
            amount,
          });
          goBack();
        }}
      >
        Add
      </AddButton>
    </UIIncomePage>
  );
}
