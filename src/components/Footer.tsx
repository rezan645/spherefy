"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="p-4 mt-12 text-center border-t dark:border-gray-700">
      <p>{t("footer.rights")}</p>
    </footer>
  );
};
