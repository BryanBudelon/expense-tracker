import React from "react";

import { Balance } from "../components/Balance";
import { Header } from "../components/Header";
import { IncomeExpenses } from "../components/IncomeExpenses.js";
import { TransactionList } from "../components/TransactionList.js";
import { TransactionButtons } from "../components/TransactionButtons.js";

export function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <TransactionButtons />
        {/* <AddTransaction /> */}
      </div>
    </div>
  );
}
