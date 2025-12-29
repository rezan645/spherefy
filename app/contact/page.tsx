// app/contact/page.tsx
'use client';
import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="border rounded px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          aria-label="Your Name"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="border rounded px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          aria-label="Your Email"
        />
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="border rounded px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 h-24 resize-none"
          aria-label="Message"
        />
        {submitStatus === 'success' && (
          <p className="text-green-600 dark:text-green-400 text-sm">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600 dark:text-red-400 text-sm">Failed to send message. Please try again.</p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
