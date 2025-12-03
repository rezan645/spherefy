"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="text-center my-12">
      <h1 className="text-4xl font-bold">{t("hero.title")}</h1>
      <p className="mt-4 text-lg">{t("hero.subtitle")}</p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded">{t("hero.cta")}</button>
    </section>
  );
};
