import { useState } from "react";
import "./TodoAdd.css";
import CustomAlert from "../CustomAlert/CustomAlert";
import { useContext } from "react";
import { TodosContext } from "@/Contexts/TodosContext";
import { v4 as uuidv4 } from "uuid";

export default function TodoAdd() {
  const [todoTextValue, setTodoTextValue] = useState("");
  const { todos, setTodos } = useContext(TodosContext);

  function handleAddTodo() {
    if (todoTextValue !== "") {
      setTodos([
        ...todos,
        { id: `${uuidv4()}`, value: `${todoTextValue}`, isCompleted: false },
      ]);

      setTodoTextValue("");
    } else {
      <CustomAlert alertValue="Can't Add Todo With No Text" />;
    }
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
