import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // loads translations from /public/locales
  .use(LanguageDetector) // detects browser language
  .use(initReactI18next) // binds to React
  .init({
    fallbackLng: "en",
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false, // React handles XSS already
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Vite serves from /public
    },
  });

export default i18n;
