import { useState } from "react";

export default function Button() {
  let [name, setName] = useState("Eyad");

  return (
    <>
      <button
        onClick={() => (name === "Eyad" ? setName("Elaph") : setName("Eyad"))}
      >
        Click Me
      </button>
      <p>{name}</p>
    </>
  );
}
