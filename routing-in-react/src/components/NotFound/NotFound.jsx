import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>404 Page</h1>
      <p>Page Does Not Exist</p>

      <Link to="/home">
        <button style={{ cursor: "pointer" }}>Back to Home</button>
      </Link>
    </>
  );
}
