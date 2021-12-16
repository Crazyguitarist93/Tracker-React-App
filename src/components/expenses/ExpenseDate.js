import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("it-IT", { month: "long" });
  const day = props.date.toLocaleString("it-IT", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <main className="expense-date">
      <div className="expense-date__month">
        {month.charAt(0).toUpperCase() + month.slice(1)}
      </div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </main>
  );
};

export default ExpenseDate;
