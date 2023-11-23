import React from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { AddIncome } from "./pages/AddIncome.js";
import { AddExpense } from "./pages/AddExpense.js";
import "./fonts/fonts.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/AddIncome" Component={AddIncome} />
        <Route path="/AddExpense" Component={AddExpense} />
      </Routes>
    </Router>
  );
}

export default App;
