import { React, useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDatahandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.newExpenseHandler(expenseData);
  };
  const [showWindow, showEditingWindow] = useState(false);
  const expenseFormWindow = () => {
    showEditingWindow(true);
  };

  const hideWindow = () => {
    showEditingWindow(false);
  };
  return (
    <div className="new-expense">
      {!showWindow && (
        <button
          className="new-expense__actions_top-button"
          onClick={expenseFormWindow}
        >
          Add New Expense
        </button>
      )}
      {showWindow && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDatahandler}
          hideEditingWindow={hideWindow}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
