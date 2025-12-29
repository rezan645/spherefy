// app/about/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Spherefy',
  description: 'Learn more about Spherefy and our mission to create modern web solutions.',
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">About Spherefy</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Spherefy is a fictional company created to demonstrate a modern, responsive web design. We focus on building user-friendly interfaces with clean navigation and smooth animations.
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        Our mission is to create beautiful, accessible, and performant web applications that provide exceptional user experiences across all devices and platforms.
      </p>
    </article>
  );
}
