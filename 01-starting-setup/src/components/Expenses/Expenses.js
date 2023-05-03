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

  return (
    <div>
      {/* The content between the Card tags is passed to the Card component as props.children. */}
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterYear={filterYearHandler}
        />
        {props.items.map(expense => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
