import "./TodosFilter.css";

export default function TodosFilter({ activeFilter, setActiveFilter }) {
  return (
    <>
      <div className="filter-container">
        <div
          className={`filter-button ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          الكل
        </div>
        <div
          className={`filter-button ${activeFilter === "done" ? "active" : ""}`}
          onClick={() => setActiveFilter("done")}
        >
          مكتمل
        </div>
        <div
          className={`filter-button ${activeFilter === "undone" ? "active" : ""}`}
          onClick={() => setActiveFilter("undone")}
        >
          غير مكتمل{" "}
        </div>
      </div>
    </>
  );
}
