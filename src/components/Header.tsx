"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ALL_LANGS, LANGUAGE_NAMES } from "../i18n/strings";

export const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full py-4 shadow-sm border-b border-[var(--border)] bg-[var(--card)] sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-[var(--accent)] hover:opacity-80 transition">
          Spherefy
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href={`/${lang === 'en' ? '' : lang}`}><span className="hover:text-[var(--accent-hover)] transition">{t("nav.home")}</span></Link>
          <Link href={`/${lang === 'en' ? 'jobs' : `${lang}/jobs`}`}><span className="hover:text-[var(--accent-hover)] transition">{t("nav.jobs")}</span></Link>
          <Link href={`/${lang === 'en' ? 'courses' : `${lang}/courses`}`}><span className="hover:text-[var(--accent-hover)] transition">{t("nav.courses")}</span></Link>
          <Link href={`/${lang === 'en' ? 'about' : `${lang}/about`}`}><span className="hover:text-[var(--accent-hover)] transition">{t("nav.about")}</span></Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="px-5 py-2 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hover)] transition flex items-center gap-2"
              aria-label="Select language"
            >
              <span>{LANGUAGE_NAMES[lang]}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                {ALL_LANGS.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-[var(--border)] transition ${
                      lang === l ? "bg-[var(--accent)] text-white" : ""
                    }`}
                  >
                    {LANGUAGE_NAMES[l]}
                  </button>
                ))}
              </div>
            )}
          </div>
          
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
              href={`/${lang === 'en' ? 'jobs' : `${lang}/jobs`}`}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[var(--accent-hover)] transition"
            >
              {t("nav.jobs")}
            </Link>
            <Link
              href={`/${lang === 'en' ? 'courses' : `${lang}/courses`}`}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[var(--accent-hover)] transition"
            >
              {t("nav.courses")}
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