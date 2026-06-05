import "./TodosFilter.css";

export default function TodosFilter({ activeFilter, setActiveFilter }) {
  function renderAllTodos() {
    setActiveFilter("all");
  }

  function renderCompletedTodos() {
    setActiveFilter("done");
  }

  function renderUncompletedTodos() {
    setActiveFilter("undone");
  }

  return (
    <>
      <div className="filter-container">
        <div
          className={`filter-button ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => renderAllTodos()}
        >
          الكل
        </div>
        <div
          className={`filter-button ${activeFilter === "done" ? "active" : ""}`}
          onClick={() => renderCompletedTodos()}
        >
          مكتمل
        </div>
        <div
          className={`filter-button ${activeFilter === "undone" ? "active" : ""}`}
          onClick={() => renderUncompletedTodos()}
        >
          غير مكتمل{" "}
        </div>
      </div>
    </>
  );
}
