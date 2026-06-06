import { useState } from "react";
import { useContext } from "react";
import { TodosContext } from "@/Contexts/TodosContext";
import { useAlert, useAlertValue } from "@/Contexts/AlertContext";
import { v4 as uuidv4 } from "uuid";
import "./TodoAdd.css";

export default function TodoAdd() {
  const [todoTextValue, setTodoTextValue] = useState("");
  const { setTodos } = useContext(TodosContext);
  const { setAppear } = useAlert();
  const { setAlertValue } = useAlertValue();

  function handleAddTodo() {
    if (todoTextValue.trim() === "") {
      setAppear(true);
      setAlertValue("لا يمكن إضافة مهمة فارغة");
    } else {
      setTodos((prev) => [
        ...prev,
        { id: `${uuidv4()}`, value: `${todoTextValue}`, isCompleted: false },
      ]);

      setAppear(true);
      setAlertValue("تم إضافة مهمة جديدة");
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
