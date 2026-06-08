import "./App.css";

import { useReducer, useState } from "react";
import resultReducerFunction from "./reducers/resultReducer";

function App() {
  const [firstNumberInput, setFirstNumberInput] = useState(null);
  const [secondNumberInput, setSecondNumberInput] = useState(null);
  const [result, dispatch] = useReducer(resultReducerFunction, null);

  // EVENT HANDLERS
  function handleSumClick() {
    dispatch({
      type: "sum",
      payload: {
        firstNum: firstNumberInput,
        secondNum: secondNumberInput,
      },
    });
  }

  function handleSubClick() {
    dispatch({
      type: "sub",
      payload: {
        firstNum: firstNumberInput,
        secondNum: secondNumberInput,
      },
    });
  }

  function handleMultClick() {
    dispatch({
      type: "multi",
      payload: {
        firstNum: firstNumberInput,
        secondNum: secondNumberInput,
      },
    });
  }

  function handleDivClick() {
    dispatch({
      type: "div",
      payload: {
        firstNum: firstNumberInput,
        secondNum: secondNumberInput,
      },
    });
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

        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default App;
