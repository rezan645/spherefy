"use client";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const switchLang = () => setLang(lang === "en" ? "ua" : "en");

  return (
    <header className="w-full py-4 shadow-sm border-b border-[var(--border)] bg-[var(--card)] sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-[var(--accent)] hover:opacity-80 transition">
          Spherefy
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/"><span className="hover:text-[var(--accent-hover)] transition">{t("nav.home")}</span></Link>
          <Link href="/#features"><span className="hover:text-[var(--accent-hover)] transition">{t("nav.features")}</span></Link>
          <Link href="/about"><span className="hover:text-[var(--accent-hover)] transition">{t("nav.about")}</span></Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={switchLang}
            className="px-5 py-2 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hover)] transition"
            aria-label={`Switch language to ${lang === "en" ? "Ukrainian" : "English"}`}
          >
            {lang.toUpperCase()}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--border)] transition"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-[var(--border)]">
          <div className="flex flex-col gap-4 px-6 pt-4">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[var(--accent-hover)] transition"
            >
              {t("nav.home")}
            </Link>
            <Link 
              href="/#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[var(--accent-hover)] transition"
            >
              {t("nav.features")}
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[var(--accent-hover)] transition"
            >
              {t("nav.about")}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};