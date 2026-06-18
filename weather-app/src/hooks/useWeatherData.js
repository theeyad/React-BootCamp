// Making custom hook to have the logic instead of WeatherBox.jsx
import axios from "axios";
import { useEffect, useState } from "react";

// API KEY
const tomorrowApiKey = import.meta.env.VITE_TOMORROW_API_KEY;

export default function useWeatherData(cityName) {
  const [loader, setLoader] = useState(true);
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    setLoader(true);

    const controller = new AbortController();
    const geocodingAPI = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;

    const fetchWeatherData = async () => {
      try {
        const geoRes = await axios.get(geocodingAPI, {
          signal: controller.signal,
        });

        const cityLat = geoRes.data.results[0].latitude;
        const cityLong = geoRes.data.results[0].longitude;

        const tomorrowApiRes = await axios.get(
          `https://api.tomorrow.io/v4/weather/realtime?location=${cityLat},${cityLong}&apikey=${tomorrowApiKey}`,
          { signal: controller.signal },
        );

        const weatherCode = tomorrowApiRes.data.data.values.weatherCode;

        setWeatherData({
          temp: Math.round(tomorrowApiRes.data.data.values.temperature),
          weatherCode: weatherCode,
        });
        setLoader(false);
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.error(error);
      }
    };

    fetchWeatherData();
    return () => controller.abort();
  }, [cityName]);

  return {
    weatherData: weatherData,
    loader: loader,
  };
}
