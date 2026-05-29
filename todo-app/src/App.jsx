import "./App.css";
import TodoBox from "./components/TodoBox/TodoBox";

function App() {
  return (
    <>
      <div className="screen h-screen w-screen">
        <div className="max-w-4xl mx-auto px-4">
          <TodoBox />
        </div>
      </div>
    </>
  );
}

export default App;
