import "./App.css";
import WeatherBox from "./components/WeatherBox/WeatherBox";

function App() {
  return (
    <>
      <div className="screen">
        <WeatherBox />
      </div>
      <div className="footer text-xs flex items-center justify-around">
        <span>Developed By Eyad</span>
        <span>Powered by Tomorrow.io</span>
      </div>
    </>
  );
}

export default App;
