import CheckButton from "../CheckButton/CheckButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import { useAlert, useAlertValue } from "@/Contexts/AlertContext";
import { useState } from "react";
import "./Todo.css";
import { useDispatch } from "@/Contexts/TodosContext";

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const { setAppear } = useAlert();
  const { setAlertValue } = useAlertValue();
  const [editValue, setEditValue] = useState("");

  function handleCheckButton() {
    dispatch({
      type: "check",
      payload: {
        todo: todo,
      },
    });

    setAppear(true);

    !todo.isCompleted
      ? setAlertValue("تم إتمام المهمة")
      : setAlertValue("تم استرجاع المهمة");
  }

  function handleEditButton() {
    if (editValue !== "") {
    dispatch({
      type: "edit",
      payload: {
        todo: todo,
        editValue: editValue
      },
    });

      setAppear(true);
      setAlertValue("تم تعديل المهمة");
      setEditValue("");
    } else {
      setAppear(true);
      setAlertValue("لا يمكن التعديل بمهمة فارغة");
    }
  }

  function handleDeleteButton() {
    dispatch({
      type: "delete",
      payload: {
        todo: todo,
      },
    });

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
