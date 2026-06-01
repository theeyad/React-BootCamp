import "./App.css";
// import CustomAlert from "./components/CustomAlert/CustomAlert";
import TodoBox from "./components/TodoBox/TodoBox";
import { TodosContext } from "./Contexts/TodosContext";

function App() {
  const todos = [];

  return (
    <>
      <div className="screen h-screen w-screen">
        <div className="max-w-4xl mx-auto px-4">
          <TodosContext.Provider value={todos}>
            <TodoBox />
          </TodosContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
