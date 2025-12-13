// app/contact/page.tsx
'use client';
export default function ContactPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded px-3 py-2 bg-gray-100 dark:bg-gray-700"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border rounded px-3 py-2 bg-gray-100 dark:bg-gray-700"
        />
        <textarea
          placeholder="Message"
          className="border rounded px-3 py-2 bg-gray-100 dark:bg-gray-700 h-24"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
