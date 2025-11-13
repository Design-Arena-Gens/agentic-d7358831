'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment integration, and advanced analytics dashboard.',
    image: 'gradient-1',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    category: 'Web App',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Task Management SaaS',
    description: 'Collaborative task management tool with real-time updates, team workspaces, and productivity analytics.',
    image: 'gradient-2',
    tags: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    category: 'SaaS',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for managing multiple social media accounts with scheduled posting and engagement metrics.',
    image: 'gradient-3',
    tags: ['Vue.js', 'Express', 'Redis', 'D3.js'],
    category: 'Dashboard',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'AI Content Generator',
    description: 'AI-powered content creation tool that helps marketers generate blog posts, social media content, and email campaigns.',
    image: 'gradient-4',
    tags: ['Next.js', 'OpenAI', 'Tailwind', 'Supabase'],
    category: 'AI Tool',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    description: 'Property listing platform with virtual tours, mortgage calculator, and advanced search filters.',
    image: 'gradient-5',
    tags: ['React', 'Three.js', 'FastAPI', 'PostgreSQL'],
    category: 'Web App',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    description: 'Mobile-first fitness application with workout tracking, nutrition planning, and progress visualization.',
    image: 'gradient-6',
    tags: ['React Native', 'Firebase', 'Charts', 'Redux'],
    category: 'Mobile App',
    link: '#',
    github: '#',
  },
];

const categories = ['All', 'Web App', 'SaaS', 'Dashboard', 'AI Tool', 'Mobile App'];

const gradients = {
  'gradient-1': 'from-blue-400 via-purple-500 to-pink-500',
  'gradient-2': 'from-green-400 via-cyan-500 to-blue-500',
  'gradient-3': 'from-orange-400 via-red-500 to-pink-500',
  'gradient-4': 'from-purple-400 via-pink-500 to-red-500',
  'gradient-5': 'from-cyan-400 via-blue-500 to-purple-500',
  'gradient-6': 'from-yellow-400 via-orange-500 to-red-500',
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of innovative solutions and creative projects that demonstrate my expertise in modern web development
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                    : 'glass-effect text-gray-700 dark:text-gray-300 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-2xl overflow-hidden card-hover cursor-pointer"
              >
                <div className={`h-48 bg-gradient-to-br ${gradients[project.image as keyof typeof gradients]} flex items-center justify-center`}>
                  <div className="text-white text-6xl font-bold opacity-20">
                    {project.id}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-primary-500 font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold transition-colors"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-semibold transition-colors"
                    >
                      Code
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-slate-900/50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center glass-effect p-12 rounded-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let's work together to create something amazing that exceeds your expectations
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold text-xl shadow-lg hover:shadow-2xl transition-all"
          >
            Let's Talk
            <ArrowRight size={24} />
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
