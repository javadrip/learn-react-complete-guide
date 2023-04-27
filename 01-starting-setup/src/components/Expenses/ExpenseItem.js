import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = props => {
  // Hooks (such as useState) must be called at the top level of the component, not inside loops, conditions, or nested functions.
  // useState returns an array with two elements:
  //    the current state value (the variable itself) and
  //    a function (aka the updating function) that allows you to update the state.
  // Here, we are using array destructuring to extract the two elements of the array returned by useState.
  // The initial value is passed to useState as an argument.
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // When this state updating function setTitle is called, the component function will be executed again.
    setTitle("Updated!");
    // The console.log below still shows the old title because the state update is scheduled,
    // so the new value is not yet available until the next time the component function is executed.
    console.log(title);
  };

  return (
    // The content between the Card tags is passed to the Card component as props.children.
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
