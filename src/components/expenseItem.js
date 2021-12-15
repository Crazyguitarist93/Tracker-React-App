import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <main className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2 className="expense-item__price">€{props.amount}</h2>
      </div>
    </main>
  );
};

export default ExpenseItem;
