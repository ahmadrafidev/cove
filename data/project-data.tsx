import { FileText, Globe } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  link: string;
  iconBg: string;
  icon: React.ReactNode;
};

export const PROJECT_DATA: Project[] = [
  {
    id: 1,
    title: "ProFile",
    date: "2024-03-01",
    excerpt: "Transform your resume into an ATS-optimized format instantly. Our AI analyzes job descriptions to help you create perfectly tailored resumes that get noticed.",
    link: "https://pro-file-web.vercel.app/",
    iconBg: "bg-emerald-100",
    icon: <FileText className="w-6 h-6 text-emerald-600" />,
    tags: ["Resume", "ATS", "AI Writing", "Job Search"]
  },
  {
    id: 2,
    title: "WHITW - What's Happening in the World?",
    date: "2024-03-15",
    excerpt: "Stay informed with AI-powered news analysis. Get concise summaries, key insights, and global perspectives on current events.",
    link: "https://whitw.vercel.app/",
    iconBg: "bg-blue-100",
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    tags: ["News", "AI Analysis", "Global"]
  }
];