import { useReducer, createContext, useContext, useEffect } from "react";
import todosReducer from "@/reducers/todosReducer";

const TodosContextProvider = createContext([]);
const DispatchContextProvider = createContext(null);

export default function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, [], () => {
    const stored = localStorage.getItem("todos");
    return JSON.parse(stored) ?? [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContextProvider.Provider value={todos}>
      <DispatchContextProvider.Provider value={dispatch}>
        {children}
      </DispatchContextProvider.Provider>
    </TodosContextProvider.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTodos = () => {
  return useContext(TodosContextProvider);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDispatch = () => {
  return useContext(DispatchContextProvider);
};
