// app/login/page.tsx
'use client';
export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="border rounded px-3 py-2 bg-gray-100 dark:bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded px-3 py-2 bg-gray-100 dark:bg-gray-700"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}
