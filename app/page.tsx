import React from 'react';
import Link from "next/link"
import { Sparkles, Github } from 'lucide-react';
import { PROJECT_DATA } from '../data/project-data';
import { ProjectCard } from '../components/project-card';

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <header className="relative z-10">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-purple-200 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </div>
          
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-sm font-medium text-gray-800">
              <Sparkles className="w-4 h-4 text-blue-500" />
              Welcome to The Cove
            </div>
            
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                A sanctuary for your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  intelligent solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Discover a curated collection of AI-powered solutions designed to 
                enhance your digital experience and streamline your daily workflow.
              </p>
            </div>
            
            <div className="flex justify-center gap-4">
              <Link
                href="/projects"
                passHref
                className="px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                Explore Projects
              </Link>
              <Link
                href="https://github.com/ahmadrafidev/cove"
                passHref
                className="px-6 py-3 rounded-lg bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </Link>
            </div>
          </div>
        </header>

        <main>
          <div className="grid gap-8 md:grid-cols-2">
            {PROJECT_DATA.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </main>

        <footer className="mt-20 text-center text-gray-600">
          <p>Built with care by{" "}
            <Link href="https://x.com/rafiwiranaa" passHref className="underline" aria-label="Visit Rafi's Twitter">
              Rafi
            </Link> © {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}