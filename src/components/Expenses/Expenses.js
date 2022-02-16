import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
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

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedFilter}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={fiteredExpenses}/>
        <ExpensesList items={fiteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
