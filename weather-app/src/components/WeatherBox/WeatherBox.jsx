import "./WeatherBox.css";
import LanguageBtn from "../LanguageBtn/LanguageBtn";
import { TiWeatherSunny } from "react-icons/ti";
import axios from "axios";

const cityName = "Cairo";
const geocodingAPI = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;
const response = await axios.get(geocodingAPI);

export default function WeatherBox() {
  console.log(response.data.results[0].latitude);

  return (
    <>
      <div className="custom-container font-cairo">
        <div className="box py-4 px-3">
          <div className="heading flex gap-2 items-end-safe mb-3">
            <span className="city-name text-5xl font-bold px-2">الرياض</span>
            <span className="current-date text-sm">يونيو 15 2026</span>
          </div>
          <hr />
          <div className="body mt-2 flex justify-between items-center gap-8">
            <div className="weather-details">
              <div className="main flex items-center gap-4">
                <span className="degree font-medium text-8xl">34</span>
                <span className="icon text-6xl">
                  <TiWeatherSunny />
                </span>
              </div>
              <p className="description my-3">سماء صافية</p>
              <p className="further-details">الصغري 24 | العظمي 36</p>
            </div>
            <div className="weather-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-36"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="lang-btn flex justify-end">
          <LanguageBtn />
        </div>
      </div>
    </>
  );
}
