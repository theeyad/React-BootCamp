import "./App.css";
import WeatherBox from "./components/WeatherBox/WeatherBox";
import LanguageBtn from "./components/LanguageBtn/LanguageBtn";

function App() {
  return (
    <div className="screen">
      <WeatherBox />
      <LanguageBtn />
    </div>
  );
}

export default App;
