import React from 'react';

import { ProjectCard } from '../../components/project-card';
import { PROJECT_DATA } from '../../data/project-data';

export const metadata = {
  title: "Projects - The Cove",
  description: "A collection of AI-powered solutions crafted to enhance your digital experience.",
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tighter">
            Explore The Cove Projects
          </h1>
          <p className="text-lg text-gray-600">
            A curated collection of intelligent tools crafted to enhance 
            your digital experience and streamline daily workflows.
          </p>
        </header>

        <main>
          <div className="grid gap-8 md:grid-cols-2">
            {PROJECT_DATA.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-sm font-medium text-blue-700">
              More projects coming soon
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}