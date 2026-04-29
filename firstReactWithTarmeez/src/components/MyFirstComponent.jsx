import "./MyFirstComponent.css";

export default function MyFirstComponent() {
  let person = "Ali";

  return (
    <div>
      <h1 className="text-4xl font-bold bg-blue-500">Hello From Eyad</h1>
      <p className={person === "Eyad" ? "green" : "red"}>Hi</p>
    </div>
  );
}
