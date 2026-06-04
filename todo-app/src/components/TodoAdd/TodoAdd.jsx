import { useState } from "react";
import { useContext } from "react";
import { TodosContext } from "@/Contexts/TodosContext";
import { AlertContext, AlertValueContext } from "@/Contexts/AlertContext";
import { v4 as uuidv4 } from "uuid";
import "./TodoAdd.css";

export default function TodoAdd() {
  const [todoTextValue, setTodoTextValue] = useState("");
  const { todos, setTodos } = useContext(TodosContext);
  const { setAlertValue } = useContext(AlertValueContext);
  const { setAppear } = useContext(AlertContext);

  function handleAddTodo() {
    if (todoTextValue === "") {
      setAppear(true);
      setAlertValue("لا يمكن إضافة مهمة فارغة");
    } else {
      if (todoTextValue !== "")
        setTodos([
          ...todos,
          { id: `${uuidv4()}`, value: `${todoTextValue}`, isCompleted: false },
        ]);
    }

    setTodoTextValue("");
  }

  return (
    <>
      <form
        method="post"
        className="add-todo-container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="todo-text"
          id="todoText"
          value={todoTextValue}
          onChange={(e) => {
            setTodoTextValue(e.target.value);
          }}
          className="add-todo-input"
          placeholder="إضافة مهمة جديدة..."
        />
        <button
          type="submit"
          className="add-todo-button"
          onClick={() => handleAddTodo()}
        >
          إضافة
        </button>
      </form>
    </>
  );
}
