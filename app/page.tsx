"use client";
import { Header } from "../src/components/Header";
import { Hero } from "../src/components/Hero";
import { FeatureCard } from "../src/components/FeatureCard";
import { Footer } from "../src/components/Footer";
import { useLanguage } from "../src/context/LanguageContext";

export default function Page() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <Hero />

      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">{t("features.title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard 
            icon="👤" 
            title={t("features.userManagement")} 
            description={t("features.userManagementDesc")} 
          />
          <FeatureCard 
            icon="🔒" 
            title={t("features.rbac")} 
            description={t("features.rbacDesc")} 
          />
          <FeatureCard 
            icon="📊" 
            title={t("features.analytics")} 
            description={t("features.analyticsDesc")} 
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
