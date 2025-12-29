"use client";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: Props) => {
  return (
    <article className="card flex flex-col items-center text-center p-8 gap-4 hover:translate-y-[-5px] transition-transform duration-300">
      <div className="text-[var(--accent)] text-5xl" role="img" aria-hidden="true">{icon}</div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 max-w-xs">{description}</p>
    </article>
  );
};