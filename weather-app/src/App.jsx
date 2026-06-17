import "./App.css";
import WeatherBox from "./components/WeatherBox/WeatherBox";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback="Loading...">
        <div className="screen">
          <WeatherBox />
        </div>
        <div className="footer text-xs flex items-center justify-around">
          <span>Developed By Eyad</span>
          <span>Powered by Tomorrow.io</span>
        </div>
      </Suspense>
    </>
  );
}

export default App;
