// components/ThemeToggle.tsx
'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Щоб уникнути проблем гідратації, не показуємо нічого до монтовання
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === 'dark' ? (
        <FiSun className="w-6 h-6 text-yellow-400" />
      ) : (
        <FiMoon className="w-6 h-6 text-gray-800" />
      )}
    </button>
  );
}
