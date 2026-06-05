import { useEffect, useState } from "react";
import "./App.css";
import CustomAlert from "./components/CustomAlert/CustomAlert";
import TodoBox from "./components/TodoBox/TodoBox";
import { TodosContext } from "./Contexts/TodosContext";
import { AlertContext, AlertValueContext } from "./Contexts/AlertContext";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [appear, setAppear] = useState(false);
  const [alertValue, setAlertValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="screen">
        <div className="max-w-4xl mx-auto px-4">
          <TodosContext.Provider value={{ todos, setTodos }}>
            <AlertContext.Provider value={{ appear, setAppear }}>
              <AlertValueContext.Provider value={{ alertValue, setAlertValue }}>
                <TodoBox />
                {appear ? <CustomAlert /> : <></>}
              </AlertValueContext.Provider>
            </AlertContext.Provider>
          </TodosContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
