import "./TodosFilter.css";

export default function TodosFilter() {
  return (
    <>
      <div className="filter-container">
        <div className="filter-button">الكل</div>
        <div className="filter-button">مكتمل</div>
        <div className="filter-button">غير مكتمل </div>
      </div>
    </>
  );
}
