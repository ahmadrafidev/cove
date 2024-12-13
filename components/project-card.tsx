import Link from "next/link"
import { ArrowUpRight } from 'lucide-react';

type Project = {
  link: string;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  excerpt: string;
  tags: string[];
};

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Link
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
  >
    <div className="absolute top-0 right-0 p-4">
      <ArrowUpRight className="text-gray-400 w-5 h-5 transition-all duration-300 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </div>
    <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${project.iconBg}`}>
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