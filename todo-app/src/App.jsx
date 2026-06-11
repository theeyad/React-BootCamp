import "./App.css";
import TodoBox from "./components/TodoBox/TodoBox";
import { AlertProvider } from "./Contexts/AlertContext";
import TodosProvider from "./Contexts/TodosContext";

function App() {

  return (
    <div className="screen">
      <div className="max-w-4xl mx-auto px-4">
        <AlertProvider>
          <TodosProvider>
            <TodoBox />
          </TodosProvider>
        </AlertProvider>
      </div>
    </div>
  );
}

export default App;
