import "./CitySelect.css";
import { useTranslation } from "react-i18next";

export default function CitySelect({ setCityName }) {
  const { t } = useTranslation();
  return (
    <div className="flex gap-4 items-center text-white">
      <label htmlFor="city" className="cursor-pointer">
        {t("city")}
      </label>
      <select
        name="cityName"
        id="city"
        onChange={(e) => setCityName(e.target.value)}
      >
        <option value="Al Manşūrah">{t("cities.Al Manşūrah")}</option>
        <option value="Damietta">{t("cities.Damietta")}</option>
        <option value="Cairo">{t("cities.Cairo")}</option>
        <option value="Ismailia">{t("cities.Ismailia")}</option>
        <option value="Kafr ash Shaykh">{t("cities.Kafr ash Shaykh")}</option>
      </select>
    </div>
  );
}
