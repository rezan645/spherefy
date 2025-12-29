"use client";
import { Header } from "../../src/components/Header";
import { Footer } from "../../src/components/Footer";
import { useLanguage } from "../../src/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <article className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">{t("about.title")}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t("about.desc")}
        </p>
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We believe every student deserves access to quality job opportunities and career development resources. 
            Our platform bridges the gap between students and employers, making it easier for students to find their 
            first job, gain experience, and build successful careers.
          </p>
          <h2 className="text-2xl font-semibold mb-2 mt-6">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Curated job listings for students and recent graduates</li>
            <li>Free and affordable courses to develop in-demand skills</li>
            <li>Career guidance and resume building tips</li>
            <li>Connections with employers looking for student talent</li>
            <li>Resources to help you succeed in your job search</li>
          </ul>
        </div>
      </article>
      <Footer />
    </>
  );
}
