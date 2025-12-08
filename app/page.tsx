"use client";
import { Header } from "../src/components/Header";
import { Hero } from "../src/components/Hero";
import { FeatureCard } from "../src/components/FeatureCard";
import { Footer } from "../src/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />

      <section id="features" className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <FeatureCard icon="👤" title="User Management" description="Add, remove and manage users easily" />
        <FeatureCard icon="🔒" title="RBAC" description="Set roles and permissions for users" />
        <FeatureCard icon="📊" title="Analytics" description="Track usage and performance" />
      </section>

      <Footer />
    </>
  );
}
