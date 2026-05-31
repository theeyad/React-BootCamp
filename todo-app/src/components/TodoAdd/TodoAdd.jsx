import "./TodoAdd.css";

export default function TodoAdd() {
  return (
    <>
      <form
        method="post"
        className="add-todo-container"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="todo-text"
          id="todoText"
          className="add-todo-input"
          placeholder="إضافة مهمة جديدة..."
        />
        <button type="submit" className="add-todo-button">
          إضافة
        </button>
      </form>
    </>
  );
}
