// app/projects/page.tsx
'use client';
import { motion } from 'motion/react';

export default function ProjectsPage() {
  const projects = [
    { title: 'Project Alpha', desc: 'Description for Project Alpha.' },
    { title: 'Project Beta', desc: 'Description for Project Beta.' },
    { title: 'Project Gamma', desc: 'Description for Project Gamma.' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Our Projects</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
