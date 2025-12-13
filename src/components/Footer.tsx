"use client";
import { useLanguage } from "../context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-20 py-6 bg-[var(--card)] border-t border-[var(--border)] text-center text-gray-700 dark:text-gray-300">
      <p>{t("footer.rights")}</p>
    </footer>
  );
};