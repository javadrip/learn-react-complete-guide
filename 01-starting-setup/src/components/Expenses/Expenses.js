import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  // Filter the expenses by year.
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      {/* The content between the Card tags is passed to the Card component as props.children. */}
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterYear={filterYearHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
