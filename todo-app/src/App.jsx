import { useState } from "react";
import "./App.css";
// import CustomAlert from "./components/CustomAlert/CustomAlert";
import TodoBox from "./components/TodoBox/TodoBox";
import { TodosContext } from "./Contexts/TodosContext";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div className="screen">
        <div className="max-w-4xl mx-auto px-4">
          <TodosContext.Provider value={{ todos, setTodos }}>
            <TodoBox />
          </TodosContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
