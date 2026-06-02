import "./CheckButton.css";
import { FaCheck } from "react-icons/fa6";

export default function CheckButton({ onClick }) {
  return (
    <>
      <div className="check-button" onClick={onClick}>
        <FaCheck />
      </div>
    </>
  );
}
