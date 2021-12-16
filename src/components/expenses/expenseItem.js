import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";
const ExpenseItem = (props) => {
  // let title = props.title;
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Aggiornato");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2 className="expense-item__price">€{props.amount}</h2>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

//non utilizzare le parentesi tonde per richiamare la funzione
