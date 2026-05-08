import { useState } from "react";

export default function MyInput() {
  let [inputvalue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <label>User Name:</label>
      <input
        value={inputvalue}
        onChange={handleInput}
        type="text"
        name="username"
        id="username"
        autoComplete="name"
      />
    </>
  );
}
