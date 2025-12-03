"use client";

import React from "react";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

export const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-xl font-bold">Spherefy</h1>
      <nav className="flex gap-4">
        <a href="#features">{t("nav.features")}</a>
        <a href="#about">{t("nav.about")}</a>
        <LanguageToggle />
      </nav>
    </header>
  );
};
