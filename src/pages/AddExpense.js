import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGlobalState } from "../zustand/GlobalState";

export function AddExpense() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const add = useGlobalState((state) => state.add);
  return (
    <div>
      <h2>Adding Income</h2>
      <p>Description</p>
      <input
        type="text"
        value={text}
        onChange={(text) => setText(text.target.value)}
        placeholder="Description"
      ></input>
      <p>Amount</p>
      <input
        type="number"
        value={amount}
        onChange={(amount) => setAmount(amount.target.value)}
        placeholder="Amount"
      ></input>
      <button
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
      </button>
    </div>
  );
}
