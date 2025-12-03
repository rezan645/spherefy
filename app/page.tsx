// app/page.tsx
"use client"; // потрібно, бо будемо використовувати контекст

import { Header } from "../src/components/Header";
import { Hero } from "../src/components/Hero";
import { FeatureCard } from "../src/components/FeatureCard";
import { Footer } from "../src/components/Footer";
import { useLanguage } from "../src/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUserShield, faChartLine } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div>
      <Header />
      <main className="max-w-5xl mx-auto px-4">
        <Hero />

        <section id="features" className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<FontAwesomeIcon icon={faUsers} />}
            title={t("features.userManagement")}
            desc={t("features.userManagementDesc")}
          />
          <FeatureCard
            icon={<FontAwesomeIcon icon={faUserShield} />}
            title={t("features.rbac")}
            desc={t("features.rbacDesc")}
          />
          <FeatureCard
            icon={<FontAwesomeIcon icon={faChartLine} />}
            title={t("features.analytics")}
            desc={t("features.analyticsDesc")}
          />
        </section>

        <section id="about" className="mt-12">
          <div className="p-6 bg-white/5 rounded-xl">
            <h2 className="text-xl font-semibold">{t("about.title")}</h2>
            <p className="mt-3">{t("about.desc")}</p>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
