import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, sub, mult, div } from "./features/calculate/calculateSlice";

function App() {
  const [firstNumberInput, setFirstNumberInput] = useState(null);
  const [secondNumberInput, setSecondNumberInput] = useState(null);

  const resultState = useSelector((state) => state.calculate.result);
  const dispatch = useDispatch();

  // EVENT HANDLERS
  function handleSumClick() {
    dispatch(
      add({
        firstNumberInput: Number(firstNumberInput),
        secondNumberInput: Number(secondNumberInput),
      }),
    );
  }

  function handleSubClick() {
    dispatch(
      sub({
        firstNumberInput: Number(firstNumberInput),
        secondNumberInput: Number(secondNumberInput),
      }),
    );
  }

  function handleMultClick() {
    dispatch(
      mult({
        firstNumberInput: Number(firstNumberInput),
        secondNumberInput: Number(secondNumberInput),
      }),
    );
  }

  function handleDivClick() {
    dispatch(
      div({
        firstNumberInput: Number(firstNumberInput),
        secondNumberInput: Number(secondNumberInput),
      }),
    );
  }

  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          background: "teal",
        }}
      >
        {/* FIRST INPUT */}
        <label>First Number</label>
        <input
          value={firstNumberInput}
          onChange={(e) => setFirstNumberInput(e.target.value)}
        />

        {/* SECOND INPUT */}
        <label>Second Number</label>
        <input
          value={secondNumberInput}
          onChange={(e) => setSecondNumberInput(e.target.value)}
        />

        <button onClick={handleSumClick}>sum</button>

        <button onClick={handleSubClick}>subtract</button>

        <button onClick={handleMultClick}>multiply</button>

        <button onClick={handleDivClick}>divide</button>

        <hr />

        <h2>{resultState}</h2>
      </div>
    </div>
  );
}

export default App;
