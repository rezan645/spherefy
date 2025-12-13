// components/Navbar.tsx
'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Spherefy
        </Link>
        <ThemeToggle />
      </div>
      <ul className="container mx-auto flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-6 mt-4">
        <li>
          <Link href="/" className="hover:text-blue-600">Home</Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600">About</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </li>
        <li>
          <Link href="/login" className="hover:text-blue-600">Login</Link>
        </li>
        <li>
          <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}
