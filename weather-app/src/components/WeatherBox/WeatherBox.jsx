import axios from "axios";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ar";
import "./WeatherBox.css";
import LanguageBtn from "../LanguageBtn/LanguageBtn";
import CitySelect from "../CitySelect/CitySelect";
import { useTranslation } from "react-i18next";
import { LoaderFive } from "../ui/loader";

// API KEY
const tomorrowApiKey = import.meta.env.VITE_TOMORROW_API_KEY;

const weatherIcons = {
  10000: "weatherIcons/clear_day.svg",
  10001: "weatherIcons/clear_night.svg",
  10010: "weatherIcons/cloudy.svg",
  10011: "weatherIcons/cloudy.svg",
  40000: "weatherIcons/drizzle.svg",
  40001: "weatherIcons/drizzle.svg",
  50010: "weatherIcons/flurries.svg",
  50011: "weatherIcons/flurries.svg",
  20000: "weatherIcons/fog.svg",
  20001: "weatherIcons/fog.svg",
  21000: "weatherIcons/fog_light.svg",
  21001: "weatherIcons/fog_light.svg",
  60000: "weatherIcons/freezing_drizzle.svg",
  60001: "weatherIcons/freezing_drizzle.svg",
  60010: "weatherIcons/freezing_rain.svg",
  60011: "weatherIcons/freezing_rain.svg",
  62010: "weatherIcons/freezing_rain_heavy.svg",
  62011: "weatherIcons/freezing_rain_heavy.svg",
  62000: "weatherIcons/freezing_rain_light.svg",
  62001: "weatherIcons/freezing_rain_light.svg",
  70000: "weatherIcons/ice_pellets.svg",
  70001: "weatherIcons/ice_pellets.svg",
  71010: "weatherIcons/ice_pellets_heavy.svg",
  71011: "weatherIcons/ice_pellets_heavy.svg",
  71020: "weatherIcons/ice_pellets_light.svg",
  71021: "weatherIcons/ice_pellets_light.svg",
  11000: "weatherIcons/mostly_clear_day.svg",
  11001: "weatherIcons/mostly_clear_night.svg",
  11020: "weatherIcons/mostly_cloudy.svg",
  11021: "weatherIcons/mostly_cloudy.svg",
  11010: "weatherIcons/partly_cloudy_day.svg",
  11011: "weatherIcons/partly_cloudy_night.svg",
  40010: "weatherIcons/rain.svg",
  40011: "weatherIcons/rain.svg",
  42010: "weatherIcons/rain_heavy.svg",
  42011: "weatherIcons/rain_heavy.svg",
  42000: "weatherIcons/rain_light.svg",
  42001: "weatherIcons/rain_light.svg",
  50000: "weatherIcons/snow.svg",
  50001: "weatherIcons/snow.svg",
  51010: "weatherIcons/snow_heavy.svg",
  51011: "weatherIcons/snow_heavy.svg",
  51000: "weatherIcons/snow_light.svg",
  51001: "weatherIcons/snow_light.svg",
  80000: "weatherIcons/tstorm.svg",
  80001: "weatherIcons/tstorm.svg",
};

export default function WeatherBox() {
  const [cityName, setCityName] = useState("Al Manşūrah");
  const [weatherData, setWeatherData] = useState({});
  const [locale, setLocale] = useState("ar");
  const [loader, setLoader] = useState(true);
  const { t, i18n } = useTranslation();

  dayjs.locale(locale);

  useEffect(() => {
    i18n.changeLanguage(locale);
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale, i18n]);

  useEffect(() => {
    const controller = new AbortController();
    
    const geocodingAPI = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;

    const hour = new Date().getHours();
    const isDay = hour >= 6 && hour < 20;

    axios
      .get(geocodingAPI, { signal: controller.signal })
      .then((res) => {
        const cityLat = res.data.results[0].latitude;
        const cityLong = res.data.results[0].longitude;

        axios
          .get(
            `https://api.tomorrow.io/v4/weather/realtime?location=${cityLat},${cityLong}&apikey=${tomorrowApiKey}`,
            { signal: controller.signal },
          )
          .then((res) => {
            const weatherCode = res.data.data.values.weatherCode;
            const iconCode = isDay ? `${weatherCode}0` : `${weatherCode}1`;

            setWeatherData({
              temp: Math.round(res.data.data.values.temperature),
              weatherIconCode: iconCode,
              weatherDescriptionCode: iconCode,
            });
            setLoader(false);
          })
          .catch((error) => {
            if (axios.isCancel(error)) return;
            console.error(error);
          });
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        console.error(error);
      });

    return () => controller.abort();
  }, [cityName]);

  const currentDate = dayjs().format("DD MMMM YYYY");

  return (
    <>
      <div className="custom-container font-cairo">
        <div className="box py-4 px-3">
          <div className="heading flex gap-2 items-end-safe mb-3">
            <span className="city-name text-5xl font-bold px-2">
              {t(`cities.${cityName}`)}
            </span>
            <span className="current-date text-sm">{currentDate}</span>
          </div>
          <hr />
          <div className="body mt-2 flex justify-between items-center gap-8">
            {loader ? (
              <LoaderFive text={t("Generating weather...")} />
            ) : (
              <div className="weather-details">
                <div className="main flex items-center gap-4">
                  <span className="degree font-medium text-8xl">
                    {weatherData.temp}
                  </span>
                  <span className="icon">
                    <img
                      className="w-10"
                      src={
                        weatherIcons[weatherData.weatherIconCode] ??
                        weatherIcons[10000]
                      }
                      alt="weather icon"
                    />
                  </span>
                </div>
                <p className="description my-3">
                  {t(`weather.${weatherData.weatherDescriptionCode ?? 10000}`)}
                </p>
              </div>
            )}
            <div className="weather-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
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
        <div className="lang-btn flex justify-between items-center mt-4">
          <CitySelect setCityName={setCityName} setLoader={setLoader} />
          <LanguageBtn locale={locale} setLocale={setLocale} />
        </div>
      </div>
    </>
  );
}
