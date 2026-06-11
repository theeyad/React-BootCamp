import { useState } from "react";
import { useDispatch } from "@/Contexts/TodosContext";
import { useAlert, useAlertValue } from "@/Contexts/AlertContext";
import "./TodoAdd.css";

export default function TodoAdd() {
  const [todoTextValue, setTodoTextValue] = useState("");
  const dispatch = useDispatch();
  const { setAppear } = useAlert();
  const { setAlertValue } = useAlertValue();

  function handleAddTodo() {
    if (todoTextValue.trim() === "") {
      setAppear(true);
      setAlertValue("لا يمكن إضافة مهمة فارغة");
    } else {
      dispatch({
        type: "add",
        payload: {
          todoTextValue: todoTextValue,
        },
      });

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
