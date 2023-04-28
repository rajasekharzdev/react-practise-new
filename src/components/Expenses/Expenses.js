import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedFilteredValue, updatedFilteredValue] = useState("2022");
  const filterSelected = (yearSelected) => {
    updatedFilteredValue(yearSelected);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return (
      new Date(expense.date).getFullYear().toString() === selectedFilteredValue
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedFilteredValue}
          selectedExpensesYear={filterSelected}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
