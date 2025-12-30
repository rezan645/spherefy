"use client";
import { createContext, useContext, ReactNode } from "react";
import { useRouter, useParams } from "next/navigation";
import { Lang, ALL_LANGS, I18N } from "../i18n/strings";

interface LanguageContextProps {
  lang: Lang;
  t: (key: string) => string;
  setLang: (newLang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const params = useParams();

  // Get language from URL params
  const lang = (params?.lang as Lang) || 'en';

  const setLang = (newLang: Lang) => {
    const currentPath = window.location.pathname;
    let newPath = currentPath;

    // Remove existing language prefix
    const pathSegments = currentPath.split('/').filter(Boolean);
    if (pathSegments.length > 0 && ALL_LANGS.includes(pathSegments[0] as Lang)) {
      pathSegments.shift();
    }

    // Add new language prefix (except for English)
    if (newLang !== 'en') {
      newPath = `/${newLang}/${pathSegments.join('/')}`;
    } else {
      newPath = `/${pathSegments.join('/')}`;
    }

    // Ensure we have at least a slash
    if (!newPath.startsWith('/')) {
      newPath = '/' + newPath;
    }

    router.push(newPath);
  };

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