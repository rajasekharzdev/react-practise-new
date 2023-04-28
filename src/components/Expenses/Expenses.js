import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedFilteredValue, updatedFilteredValue] = useState("2022");
  const filterSelected = (yearSelected) => {
    updatedFilteredValue(yearSelected);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilteredValue;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedFilteredValue}
          selectedExpensesYear={filterSelected}
        />
        {filteredExpenses.map((expense, i) => (
          <ExpenseItem
            key={i}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
