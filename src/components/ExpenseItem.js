import "./ExpenseItem.css";
// we no need to call the passed attributes with the same name instead we can access as object

// here props will be equal to title,amount,date
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div>{props.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
