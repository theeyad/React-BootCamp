import Heading from "../Heading/Heading";
import Todo from "../Todo/Todo";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodosFilter from "../TodosFilter/TodosFilter";
import { useContext, useEffect, useState } from "react";
import { TodosContext } from "@/Contexts/TodosContext";
import "./TodoBox.css";

export default function TodoBox() {
  const { todos } = useContext(TodosContext);
  const [activeFilter, setActiveFilter] = useState(() => {
    const storedActiveFilter = localStorage.getItem("activeFilter");
    return storedActiveFilter ? JSON.parse(storedActiveFilter) : "all";
  });

  useEffect(() => {
    localStorage.setItem("activeFilter", JSON.stringify(activeFilter));
  }, [activeFilter]);

  const customTodos =
    activeFilter === "done"
      ? todos.filter((t) => t.isCompleted)
      : activeFilter === "undone"
        ? todos.filter((t) => !t.isCompleted)
        : todos;

  function renderTodos() {
    const todosRendered = customTodos.map((todo) => {
      return <Todo key={todo.id} todo={todo} />;
    });

    return todosRendered;
  }

  return (
    <>
      <div className="box rounded-xl px-3 py-5">
        <Heading />
        <TodosFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        {todos.length > 0 ? renderTodos() : null}
        <TodoAdd />
      </div>
    </>
  );
}
