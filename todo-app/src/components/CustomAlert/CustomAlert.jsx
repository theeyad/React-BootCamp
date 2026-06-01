import "./CustomAlert.css";

export default function CustomAlert({ alertValue }) {
  return (
    <>
      <div className="alert absolute bottom-0 left-0">{alertValue}</div>
    </>
  );
}
