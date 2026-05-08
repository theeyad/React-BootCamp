import { useState } from "react";

export default function Button() {
  let names = ["Eyad", "Elaph", "Othman", "Mona"];
  let [name, setName] = useState("Eyad");

  function setNames() {
    let index = parseInt(names.indexOf(name));
    let nextIndex = (index + 1) % names.length;
    setName(names[nextIndex]);
  }

  return (
    <>
      <button onClick={setNames}>Click Me</button>
      <p>{name}</p>
    </>
  );
}
