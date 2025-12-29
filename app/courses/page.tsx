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
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      instructor: "Dr. Sarah Johnson",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.9,
      students: 1800,
      price: "$49",
      description: "Master Python, data analysis, and machine learning basics. Perfect for students entering data science.",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      instructor: "Emily Chen",
      duration: "10 weeks",
      level: "Beginner",
      rating: 4.7,
      students: 3200,
      price: "Free",
      description: "Learn design principles, Figma, and create stunning user interfaces. Build your design portfolio.",
      skills: ["Figma", "Design Principles", "Prototyping"]
    },
    {
      id: 4,
      title: "Backend Development with Node.js",
      instructor: "Mike Rodriguez",
      duration: "14 weeks",
      level: "Intermediate",
      rating: 4.8,
      students: 2100,
      price: "$79",
      description: "Build robust backend systems with Node.js, Express, and databases. Learn REST APIs and authentication.",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"]
    },
    {
      id: 5,
      title: "Mobile App Development",
      instructor: "Alex Kim",
      duration: "16 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 1500,
      price: "$99",
      description: "Create iOS and Android apps with React Native. Learn app deployment and app store optimization.",
      skills: ["React Native", "iOS", "Android", "App Deployment"]
    },
    {
      id: 6,
      title: "Career Preparation & Resume Writing",
      instructor: "Career Coaches Team",
      duration: "4 weeks",
      level: "All Levels",
      rating: 4.9,
      students: 5000,
      price: "Free",
      description: "Learn how to write a winning resume, ace interviews, and build your professional network. Essential for job seekers!",
      skills: ["Resume Writing", "Interview Skills", "Networking"]
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
                    <h3 className="text-xl font-bold mb-1">{course.title}</h3>
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

