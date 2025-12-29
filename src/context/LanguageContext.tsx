"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang, ALL_LANGS, I18N } from "../i18n/strings";

interface LanguageContextProps {
  lang: Lang;
  t: (key: string) => string;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("spherefy-lang") as Lang | null;
    if (savedLang && ALL_LANGS.includes(savedLang)) {
      setLang(savedLang);
    }
    setMounted(true);
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("spherefy-lang", lang);
    }
  }, [lang, mounted]);

  const t = (key: string) => I18N[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};