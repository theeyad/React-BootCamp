import { useEffect, useMemo, useState } from "react";
import "./App.css";
import TodoBox from "./components/TodoBox/TodoBox";
import { TodosContext } from "./Contexts/TodosContext";
import { AlertProvider } from "./Contexts/AlertContext";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const todosContextValue = useMemo(() => ({ todos, setTodos }), [todos]);

  return (
    <div className="screen">
      <div className="max-w-4xl mx-auto px-4">
        <AlertProvider>
          <TodosContext.Provider value={todosContextValue}>
            <TodoBox />
          </TodosContext.Provider>
        </AlertProvider>
      </div>
    </div>
  );
}

export default App;
