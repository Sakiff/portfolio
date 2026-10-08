import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en";
import az from "./locales/az";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      az: { translation: az },
    },
    fallbackLng: "en",
    defaultNS: "translation",
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "i18n-lang",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Keep <html lang> in sync so CSS `uppercase` uses Azerbaijani casing (i → İ).
const syncLang = (lng: string) => {
  document.documentElement.lang = lng.startsWith("az") ? "az" : "en";
};
syncLang(i18n.language ?? "en");
i18n.on("languageChanged", syncLang);

export default i18n;
