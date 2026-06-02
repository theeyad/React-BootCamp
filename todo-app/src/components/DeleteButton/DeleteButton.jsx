import "./DeleteButton.css";
import { FaXmark } from "react-icons/fa6";

export default function DeleteButton({ onClick }) {
  return (
    <>
      <div className="delete-button" onClick={onClick}>
        <FaXmark />
      </div>
    </>
  );
}
