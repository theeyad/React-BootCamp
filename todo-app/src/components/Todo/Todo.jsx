import CheckButton from "../CheckButton/CheckButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import "./Todo.css";

export default function Todo({ key, value }) {
  return (
    <>
      <div className="todo-item">
        <div className="todo-text">{value}</div>
        <div className="todo-actions">
          <CheckButton />
          <EditButton />
          <DeleteButton />
        </div>
      </div>
    </>
  );
}
