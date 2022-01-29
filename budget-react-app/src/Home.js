import React from "react";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { AddTransaction } from "./components/AddTransaction";

export const Home = () => {
  return (
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <AddTransaction />
    </div>
  );
};
