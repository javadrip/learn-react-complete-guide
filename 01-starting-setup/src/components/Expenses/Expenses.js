import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  // Filter the expenses by year.
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // Conditional content: Show a message if there are no expenses for the selected year.
  let expensesContent = <p>No expenses found.</p>;

  // Conditional content: Show the expenses for the selected year.
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      {/* The content between the Card tags is passed to the Card component as props.children. */}
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterYear={filterYearHandler}
        />
        {/* Displaying expenses for the year {filteredYear}. */}
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
