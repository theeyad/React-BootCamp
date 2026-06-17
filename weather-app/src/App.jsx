import "./App.css";
import WeatherBox from "./components/WeatherBox/WeatherBox";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Suspense fallback="Loading...">
        <div className="screen">
          <WeatherBox />
        </div>
        <div className="footer text-xs flex items-center justify-around">
          <span>{t("developed_by")}</span>
          <span>{t("powered_by")}</span>
        </div>
      </Suspense>
    </>
  );
}

export default App;
