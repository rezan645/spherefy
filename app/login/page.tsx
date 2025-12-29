// app/login/page.tsx
'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate login
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In a real app, you would validate credentials here
      if (formData.username && formData.password) {
        router.push('/dashboard');
      } else {
        setError('Please enter both username and password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
          className="border rounded px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          aria-label="Username"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
          className="border rounded px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          aria-label="Password"
        />
        {error && (
          <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
