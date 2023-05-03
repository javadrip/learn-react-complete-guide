import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData, // Spread operator to copy the existing state
      id: Math.random().toString(), // Add a new property
    };
    props.onAddExpense(expenseData); // Pass the data up to the parent component
    setIsEditing(false); // Close the form
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          // Passes function stopEditingHandler() as a value to ExpenseForm.js
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
