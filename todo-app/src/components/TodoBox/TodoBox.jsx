import Heading from "../Heading/Heading";
import Todo from "../Todo/Todo";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodosFilter from "../TodosFilter/TodosFilter";
import "./TodoBox.css";

export default function TodoBox() {
  return (
    <>
      <div className="box rounded-xl px-3 py-5">
        <Heading />
        <TodosFilter />
        <Todo />
        <Todo />
        <Todo />
        <TodoAdd />
      </div>
    </>
  );
}
