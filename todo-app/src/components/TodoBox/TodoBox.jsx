import Heading from "../Heading/Heading";
import Todo from "../Todo/Todo";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodosFilter from "../TodosFilter/TodosFilter";
import "./TodoBox.css";
import { useContext } from "react";
import { TodosContext } from "@/Contexts/TodosContext";

export default function TodoBox() {
  const { todos } = useContext(TodosContext);

  function renderTodos() {
    const todosRendered = todos.map((todo) => {
      return <Todo key={todo.id} todo={todo} />;
    });

    return todosRendered;
  }

  return (
    <>
      <div className="box rounded-xl px-3 py-5">
        <Heading />
        <TodosFilter />
        {todos.length > 0 ? renderTodos() : null}
        <TodoAdd />
      </div>
    </>
  );
}
