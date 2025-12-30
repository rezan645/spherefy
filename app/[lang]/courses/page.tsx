"use client";
import { Header } from "../../src/components/Header";
import { Footer } from "../../src/components/Footer";
import { useLanguage } from "../../src/context/LanguageContext";
import { motion } from "framer-motion";

export default function CoursesPage() {
  const { t } = useLanguage();

  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      instructor: "John Smith",
      duration: "12 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 2500,
      price: "Free",
      description: "Learn HTML, CSS, JavaScript, and React from scratch. Build real-world projects and get job-ready.",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t("courses.title")}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t("courses.subtitle")}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">by {course.instructor}</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                    {course.level}
                  </span>
                </div>

                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>⏱️ {course.duration}</span>
                    <span>⭐ {course.rating}</span>
                    <span>👥 {course.students.toLocaleString()}</span>
                  </div>
                  <p className="text-2xl font-bold text-[var(--accent)]">{course.price}</p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-[var(--border)] rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="w-full px-4 py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-hover)] transition">
                  {t("courses.enroll")}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
