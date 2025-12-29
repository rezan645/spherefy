"use client";
import { Header } from "../../src/components/Header";
import { Footer } from "../../src/components/Footer";
import { useLanguage } from "../../src/context/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";

export default function JobsPage() {
  const { t } = useLanguage();

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      location: "Remote",
      type: "Internship",
      salary: "$2,000 - $3,000/month",
      description: "Looking for a motivated student to join our frontend team. Learn React, TypeScript, and modern web development.",
      skills: ["React", "TypeScript", "CSS"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Backend Developer (Student Position)",
      company: "StartupXYZ",
      location: "New York, NY",
      type: "Part-time",
      salary: "$25 - $35/hour",
      description: "Perfect opportunity for computer science students. Work with Node.js, databases, and cloud services.",
      skills: ["Node.js", "MongoDB", "AWS"],
      posted: "5 days ago"
    },
    {
      id: 3,
      title: "UI/UX Design Intern",
      company: "Creative Agency",
      location: "San Francisco, CA",
      type: "Internship",
      salary: "$1,500 - $2,500/month",
      description: "Join our design team and create beautiful user experiences. Great for design students looking for real-world experience.",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      posted: "1 week ago"
    },
    {
      id: 4,
      title: "Data Science Student Assistant",
      company: "Data Analytics Co.",
      location: "Remote",
      type: "Part-time",
      salary: "$20 - $30/hour",
      description: "Work with data analysis, machine learning models, and visualization. Ideal for statistics or data science students.",
      skills: ["Python", "Pandas", "SQL"],
      posted: "3 days ago"
    },
    {
      id: 5,
      title: "Marketing Intern",
      company: "Digital Marketing Pro",
      location: "Chicago, IL",
      type: "Internship",
      salary: "$1,800 - $2,200/month",
      description: "Help create marketing campaigns, manage social media, and analyze marketing data. Great learning opportunity!",
      skills: ["Social Media", "Analytics", "Content Creation"],
      posted: "4 days ago"
    },
    {
      id: 6,
      title: "Mobile App Developer (Student)",
      company: "App Innovations",
      location: "Remote",
      type: "Contract",
      salary: "$30 - $40/hour",
      description: "Develop mobile applications for iOS and Android. Perfect for students with mobile development experience.",
      skills: ["React Native", "Swift", "Kotlin"],
      posted: "6 days ago"
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t("jobs.title")}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t("jobs.subtitle")}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                    <p className="text-[var(--accent)] font-semibold">{job.company}</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
                    {job.type}
                  </span>
                </div>

                <div className="mb-4 space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    📍 {job.location}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    💰 {job.salary}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {job.posted}
                  </p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-[var(--border)] rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="w-full px-4 py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-hover)] transition">
                  {t("jobs.apply")}
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

