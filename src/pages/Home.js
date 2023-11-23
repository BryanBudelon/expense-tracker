import React from "react";

import { Balance } from "../components/Balance";
import { Header } from "../components/Header";
import { IncomeExpenses } from "../components/IncomeExpenses.js";
import { TransactionList } from "../components/TransactionList.js";
import { TransactionButtons } from "../components/TransactionButtons.js";
import { GlobalStyle } from "../utils/GlobalStyle.js";
import { UIContainer } from "../components/Container/index.js";

export function Home() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <UIContainer>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <TransactionButtons />
        {/* <AddTransaction /> */}
      </UIContainer>
    </div>
  );
}
