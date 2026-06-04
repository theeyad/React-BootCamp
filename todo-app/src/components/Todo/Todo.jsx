import { useContext } from "react";
import { TodosContext } from "@/Contexts/TodosContext";
import CheckButton from "../CheckButton/CheckButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import { AlertContext } from "@/Contexts/AlertContext";
import { AlertValueContext } from "@/Contexts/AlertContext";
import { useState } from "react";

import "./Todo.css";

export default function Todo({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);
  const { setAppear } = useContext(AlertContext);
  const { setAlertValue } = useContext(AlertValueContext);
  const [editValue, setEditValue] = useState("");

  function handleCheckButton() {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t,
      ),
    );

    const currentTodo = todos.find((t) => t.id === todo.id);

    setAppear(true);

    !currentTodo.isCompleted
      ? setAlertValue("تم إتمام المهمة")
      : setAlertValue("تم استرجاع المهمة");
  }

  function handleEditButton() {
    if (editValue !== "") {
      setTodos(
        todos.map((t) => (t.id === todo.id ? { ...t, value: editValue } : t)),
      );

      setAppear(true);
      setAlertValue("تم تعديل المهمة");
      setEditValue("");
    } else {
      setAppear(true);
      setAlertValue("لا يمكن التعديل بمهمة فارغة");
    }
  }

  function handleDeleteButton() {
    setTodos(todos.filter((t) => t.id !== todo.id));

    setAppear(true);
    setAlertValue("تم حذف المهمة");
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
            editValue={editValue}
            setEditValue={setEditValue}
            onSave={handleEditButton}
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
