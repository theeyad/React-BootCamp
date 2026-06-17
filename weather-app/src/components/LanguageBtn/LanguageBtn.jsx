import "./LanguageBtn.css";
import { useTranslation } from "react-i18next";

export default function LanguageBtn({ locale, setLocale }) {
  const { t } = useTranslation();
  return (
    <button
      className="cursor-pointer"
      onClick={() => {
        locale === "ar" ? setLocale("en") : setLocale("ar");
      }}
    >
      {t("toggle_lang")}
    </button>
  );
}
