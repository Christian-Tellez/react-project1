import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const [selectedFilter, setSelectedFilter] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setSelectedFilter(selectedYear);
  };

  const fiteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilter;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (fiteredExpenses.length > 0) {
    expensesContent = fiteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedFilter}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={fiteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
