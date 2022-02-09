import React, { Fragment, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2020");
  const [selectedItems, setSelectedItems] = useState(
    props.items.filter((item) => {
      return item.date.getFullYear().toString() === selectedFilter;
    })
  );

  const filterChangeHandler = (selectedYear) => {
    setSelectedFilter(selectedYear);
    setSelectedItems(
      props.items.filter((item) => {
        return item.date.getFullYear().toString() === selectedYear;
      })
    );
  };

  return (
    <Fragment>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedFilter}
          onChangeFilter={filterChangeHandler}
        />
        {selectedItems.map((value, index) => {
          return (
            <ExpenseItem
              key={selectedItems[index].id}
              title={selectedItems[index].title}
              amount={selectedItems[index].amount}
              date={selectedItems[index].date}
            />
          );
        })}
      </Card>
    </Fragment>
  );
};

export default Expenses;
