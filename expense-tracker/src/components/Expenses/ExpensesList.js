import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
  // Conditional content: Show a message if there are no expenses for the selected year.
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  // Conditional content: Show the expenses for the selected year.
  return (
    <ul className="expenses-list">
      {props.items.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
