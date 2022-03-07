import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  }
  const [formShown, setFormShown] = useState(false);

  function showFormHandler() {
    setFormShown(true);
  }
  function hideFormHandler() {
    setFormShown(false);
  }
  let NewExpense = <button onClick={showFormHandler}>Add Expense</button>;

  if (formShown) {
    NewExpense = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        hideForm={hideFormHandler}
      />
    );
  }

  return <div className="new-expense">{NewExpense}</div>;
}

export default NewExpense;
