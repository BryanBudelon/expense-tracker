import React, { useState } from "react";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
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
            (Negative - IncomeExpenses, Positive - Income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(amount) => setAmount(amount.target.value)}
            placeholder="Enter amount"
          ></input>
          <button className="btn">Add transaction</button>
        </div>
      </form>
    </div>
  );
};
