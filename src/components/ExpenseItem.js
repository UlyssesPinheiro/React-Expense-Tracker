import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { date, title, amount } = props;
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-item">
      <h2>
        <div>
          <div>{month}</div>
          <div>{year}</div>
          <div>{day}</div>
        </div>
      </h2>
      <div className="expense-item__description">
        <div>{title}</div>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
