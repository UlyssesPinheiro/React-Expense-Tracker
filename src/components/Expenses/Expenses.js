import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const { expenses } = props;
  const [year, setYear] = useState("2020");

  function filterYearHandler(selectedYear) {
    setYear(selectedYear);
  }

  const filtered = expenses.filter(
    (e) => e.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpensesChart expenses={filtered} />
      <ExpensesFilter filterDefault={year} onFilterYear={filterYearHandler} />
      <ExpensesList expenses={filtered} />
    </Card>
  );
}

export default Expenses;
