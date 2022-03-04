import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <h2>
        <ExpenseDate date={props.date}></ExpenseDate>
      </h2>
      <div className="expense-item__description">
        <div>{props.title}</div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
