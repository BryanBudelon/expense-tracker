import React, { useState } from "react";
import { useGlobalState } from "../zustand/GlobalState";
import { useNavigate } from "react-router-dom";

export function AddIncome() {
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
        className="txText"
        value={text}
        onChange={(text) => setText(text.target.value)}
        placeholder="Description"
      ></input>
      <p>Amount</p>
      <input
        className="txAmount"
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
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
            amount,
          });
          goBack();
        }}
      >
        Add
      </button>
    </div>
  );
}
