import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ar";
import "./WeatherBox.css";
import LanguageBtn from "../LanguageBtn/LanguageBtn";
import CitySelect from "../CitySelect/CitySelect";
import { useTranslation } from "react-i18next";
import { LoaderFive } from "../ui/loader";
import {
  getWeatherIcon,
  getWeatherDescription,
} from "@/constants/weatherObjectMapping";
import useWeatherData from "@/hooks/useWeatherData";

export default function WeatherBox() {
  const [cityName, setCityName] = useState("Al Manşūrah");
  const { weatherData, loader } = useWeatherData(cityName);
  const [locale, setLocale] = useState("ar");
  const { t, i18n } = useTranslation();
  const [currentDate, setCurrentDate] = useState(
    dayjs().format("DD MMMM YYYY"),
  );

  useEffect(() => {
    i18n.changeLanguage(locale);
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    dayjs.locale(locale);
    setCurrentDate(dayjs().format("DD MMMM YYYY"));
  }, [locale, i18n]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(dayjs().format("DD MMMM YYYY"));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

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
                        getWeatherIcon(weatherData.weatherCode) ??
                        getWeatherIcon(10000)
                      }
                      alt="weather icon"
                    />
                  </span>
                </div>
                <p className="description my-3">
                  {t(
                    `weather.${getWeatherDescription(weatherData.weatherCode) ?? 10000}`,
                  )}
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
          <CitySelect setCityName={setCityName} />
          <LanguageBtn locale={locale} setLocale={setLocale} />
        </div>
      </div>
    </>
  );
}
