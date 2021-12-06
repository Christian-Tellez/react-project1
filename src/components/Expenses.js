import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.items.map((value, index) => {
        return (
          <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
