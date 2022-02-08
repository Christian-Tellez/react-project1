import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((value, index) => {
        return (
          <ExpenseItem
            key={props.items[index].id}
            title={props.items[index].title}
            amount={props.items[index].amount}
            date={props.items[index].date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
