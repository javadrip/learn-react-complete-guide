import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // Multiple states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Single state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // Multiple states
  // Whenever an event listener is triggered, an event object is passed to the event handler function
  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  };

  // Single state, but not ideal and not a good practice, especially when there are edge cases
  // const titleChangeHandler = event => {
  //   setUserInput({
  //     ...userInput, // Spread operator to copy the existing state
  //     enteredTitle: event.target.value, // Overwrite the enteredTitle property
  //   });
  // };

  // const amountChangeHandler = event => {
  //   setUserInput({
  //     ...userInput, // Spread operator to copy the existing state
  //     enteredAmount: event.target.value, // Overwrite the enteredAmount property
  //   });
  // };

  // const dateChangeHandler = event => {
  //   setUserInput({
  //     ...userInput, // Spread operator to copy the existing state
  //     enteredDate: event.target.value, // Overwrite the enteredDate property
  //   });
  // };

  // Single state: This is recommended when the new state depends on the previous state
  // const titleChangeHandler = event => {
  //   setUserInput(prevState => {
  //     return { ...prevState, enteredTitle: event.target.value };
  //   });
  // };

  // const amountChangeHandler = event => {
  //   setUserInput(prevState => {
  //     return { ...prevState, enteredAmount: event.target.value };
  //   });
  // };

  // const dateChangeHandler = event => {
  //   setUserInput(prevState => {
  //     return { ...prevState, enteredDate: event.target.value };
  //   });
  // };

  const submitHandler = event => {
    event.preventDefault(); // Prevents the default behavior of the form, which is to send a request and reload the page

    // Create an object to store the data
    // This is required because the data is stored in multiple states instead of a single state
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    // console.log(enteredTitle, enteredAmount, enteredDate);

    // Clear the form after submission
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // value={enteredTitle} stores the value of the input field
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
