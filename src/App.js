import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 10,
    date: new Date(2022, 1, 6),
  },
  { id: "e2", title: "New TV", amount: 500, date: new Date(2023, 1, 6) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.97,
    date: new Date(2021, 2, 6),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (newItem) => {
    setExpenses((prevExpenses) => {
      return [newItem, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense newExpenseHandler={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
