"use client";
import { useLanguage } from "../context/LanguageContext";
import { ALL_LANGS } from "../i18n/strings";

export const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex gap-2">
      {ALL_LANGS.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={l === lang ? "font-bold underline" : ""}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
