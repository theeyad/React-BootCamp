import { useState } from "react";
import "./App.css";
import CustomAlert from "./components/CustomAlert/CustomAlert";
import TodoBox from "./components/TodoBox/TodoBox";
import { TodosContext } from "./Contexts/TodosContext";
import { AlertContext } from "./Contexts/AlertContext";

function App() {
  const [todos, setTodos] = useState([]);
  const [appear, setAppear] = useState(false);

  return (
    <>
      <div className="screen">
        <div className="max-w-4xl mx-auto px-4">
          <TodosContext.Provider value={{ todos, setTodos }}>
            <AlertContext.Provider value={{ appear, setAppear }}>
              <TodoBox />
              {appear ? <CustomAlert alertValue={`something`} /> : <></>}
            </AlertContext.Provider>
          </TodosContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
