"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export const Header = () => {
  const { lang, setLang, t } = useLanguage();

  const switchLang = () => setLang(lang === "en" ? "ua" : "en");

  return (
    <header className="w-full py-4 shadow-sm border-b border-[var(--border)] bg-[var(--card)] sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-[var(--accent)]">Spherefy</h1>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#"><span className="hover:text-[var(--accent-hover)] transition">{t("nav.home")}</span></Link>
          <Link href="#features"><span className="hover:text-[var(--accent-hover)] transition">{t("nav.features")}</span></Link>
          <Link href="#about"><span className="hover:text-[var(--accent-hover)] transition">{t("nav.about")}</span></Link>
        </nav>

        <button
          onClick={switchLang}
          className="px-5 py-2 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hover)] transition"
        >
          {lang.toUpperCase()}
        </button>
      </div>
    </header>
  );
};