import React from 'react';

import Link from "next/link"
import clsx from 'clsx'
import { 
  Sparkles, 
  Github,
  FileText, 
  Globe, 
  ArrowUpRight, 
  SearchCheck 
} from 'lucide-react';

type Project = {
  id: number;
  title: string;
  excerpt: string;
  tags: string[];
  link: string;
  iconBg: string;
  icon: React.ReactNode;
};

type ProjectCard = {
  link: string;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  excerpt: string;
  tags: string[];
};

type ProjectCardProps = {
  project: ProjectCard;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Link
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
  >
    <div className="absolute top-0 right-0 p-4">
      <ArrowUpRight className="text-gray-400 w-5 h-5 transition-all duration-300 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </div>
    <div className={clsx("w-12 h-12 mb-4 rounded-lg flex items-center justify-center", project.iconBg)}>
      {project.icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
    <p className="text-gray-600 mb-4">{project.excerpt}</p>
    <div className="flex flex-wrap items-center gap-2">
      {project.tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600"
        >
          {tag}
        </span>
      ))}
    </div>
  </Link>
);

export default function Home() {
  const PROJECT_DATA: Project[] = [
    {
      id: 1,
      title: "ProFile",
      excerpt: "Transform your resume into an ATS-optimized format instantly. Our AI analyzes job descriptions to help you create perfectly tailored resumes that get noticed.",
      link: "https://pro-file-web.vercel.app/",
      iconBg: "bg-emerald-100",
      icon: <FileText className="w-6 h-6 text-emerald-600" />,
      tags: ["Resume", "ATS", "AI Writing", "Job Search"]
    },
    {
      id: 2,
      title: "WHITW - What's Happening in the World?",
      excerpt: "Stay informed with AI-powered news analysis. Get concise summaries, key insights, and global perspectives on current events.",
      link: "https://whitw.vercel.app/",
      iconBg: "bg-blue-100",
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      tags: ["News", "AI Analysis", "Global"]
    },
    {
      id: 4,
      title: "Nous",
      excerpt: "Nous is a cutting-edge tool designed to enhance consistency, accessibility, and scalability in design systems.",
      link: "https://nouss.vercel.app/",
      iconBg: "bg-cyan-100",
      icon: <SearchCheck className="w-6 h-6 text-cyan-600" />,
      tags: ["Design Tools", "Developer Tools", "AI Recommendation", "Design System"]
    },
  ];

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

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-sm font-medium text-blue-700">
              More projects coming soon
            </div>
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