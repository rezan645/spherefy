// app/dashboard/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Spherefy',
  description: 'Manage your projects and account details.',
};

export default function DashboardPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Welcome to your dashboard. Here you can manage your projects and account details.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <p className="text-gray-600 dark:text-gray-300">Manage your projects</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p className="text-gray-600 dark:text-gray-300">Configure your account</p>
        </div>
      </div>
    </div>
  );
}
