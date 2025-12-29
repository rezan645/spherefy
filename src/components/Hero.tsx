"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[var(--bg)] dark:bg-[var(--bg)] py-32 px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
      >
        {t("hero.title")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8"
      >
        {t("hero.subtitle")}
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const featuresSection = document.getElementById('features');
          featuresSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="px-10 py-4 bg-[var(--accent)] text-white text-lg rounded-xl shadow-lg hover:bg-[var(--accent-hover)] transition cursor-pointer"
        aria-label={t("hero.cta")}
      >
        {t("hero.cta")}
      </motion.button>
    </section>
  );
};