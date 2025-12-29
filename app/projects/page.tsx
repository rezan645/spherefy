// app/projects/page.tsx
'use client';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const projects = [
    { 
      title: 'Project Alpha', 
      desc: 'A comprehensive web application with modern UI/UX design and robust backend infrastructure.',
      status: 'Active'
    },
    { 
      title: 'Project Beta', 
      desc: 'An innovative mobile-first platform designed for seamless user experiences across all devices.',
      status: 'In Progress'
    },
    { 
      title: 'Project Gamma', 
      desc: 'Enterprise-level solution with advanced analytics and real-time collaboration features.',
      status: 'Planning'
    },
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
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                {proj.status}
              </span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
