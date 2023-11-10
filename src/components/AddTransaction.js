import React, { useState } from "react";
import { useGlobalState } from "../zustand/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const add = useGlobalState((state) => state.add);

  return (
    <div>
      <h3>Add new transaction</h3>

      <div>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(text) => setText(text.target.value)}
            placeholder="Enter text"
          />
        </div>

        <div className="htmlForm-control">
          <label for="amount">
            Amount <br />
          </label>

          <input
            type="number"
            value={amount}
            onChange={(amount) => setAmount(amount.target.value)}
            placeholder="Enter amount"
          />

          <small for="amount">
            Negative: Income Expenses, Positive: Income
          </small>

          <button
            className="btn"
            onClick={() =>
              add({
                id: Math.floor(Math.random() * 100000000),
                text,
                amount,
              })
            }
          >
            Add transaction
          </button>
        </div>
      </div>
    </div>
  );
};
