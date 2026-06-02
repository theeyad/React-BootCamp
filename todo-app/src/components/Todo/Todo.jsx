import { useContext } from "react";
import { TodosContext } from "@/Contexts/TodosContext";
import CheckButton from "../CheckButton/CheckButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import { AlertContext } from "@/Contexts/AlertContext";
import "./Todo.css";

export default function Todo({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);
  const { setAppear } = useContext(AlertContext);

  function handleCheckButton() {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t,
      ),
    );

    setAppear(true);
  }

  function handleEditButton() {}

  function handleDeleteButton() {
    setTodos(todos.filter((t) => t.id !== todo.id));

    setAppear(true);
  }

  return (
    <>
      <div className="todo-item">
        <div className={`todo-text ${todo.isCompleted ? "completed" : ""}`}>
          {todo.value}
        </div>
        <div className="todo-actions">
          <CheckButton
            onClick={() => {
              handleCheckButton();
            }}
          />
          <EditButton
            onClick={() => {
              handleEditButton();
            }}
          />
          <DeleteButton
            onClick={() => {
              handleDeleteButton();
            }}
          />
        </div>
      </div>
    </>
  );
}
