'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Heart, Coffee, Music, Camera, Book } from 'lucide-react';

const skills = [
  { name: 'React & Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'UI/UX Design', level: 88 },
  { name: 'Node.js', level: 85 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'PostgreSQL', level: 80 },
];

const timeline = [
  {
    year: '2024',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading development of scalable web applications and mentoring junior developers',
  },
  {
    year: '2022',
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Co.',
    description: 'Built enterprise-level applications using modern frameworks and best practices',
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    company: 'Creative Studio',
    description: 'Crafted responsive and interactive user interfaces for diverse clients',
  },
  {
    year: '2019',
    title: 'Started Freelancing',
    company: 'Self-Employed',
    description: 'Began journey in web development, working with startups and small businesses',
  },
];

const interests = [
  { icon: Coffee, label: 'Coffee Enthusiast' },
  { icon: Music, label: 'Music Production' },
  { icon: Camera, label: 'Photography' },
  { icon: Book, label: 'Tech Blogger' },
];

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate developer with a love for creating beautiful, functional, and user-friendly digital experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect p-8 rounded-3xl"
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl flex items-center justify-center">
                <Code2 size={120} className="text-white opacity-50" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                Turning Ideas Into Reality
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                With over 5 years of experience in web development, I specialize in building modern, responsive, and performant applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                My journey started with a curiosity about how websites work, and it has evolved into a passion for creating seamless digital experiences. I believe in writing clean code, following best practices, and continuously learning new technologies.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through blog posts and tutorials.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-12 text-center gradient-text"
          >
            Technical Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-16 text-center gradient-text"
          >
            Career Journey
          </motion.h2>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary-500"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full" />
                <div className="glass-effect p-6 rounded-2xl ml-4">
                  <div className="text-sm text-primary-500 font-semibold mb-1">{item.year}</div>
                  <h3 className="text-2xl font-bold mb-1 text-gray-800 dark:text-white">{item.title}</h3>
                  <div className="text-lg text-gray-600 dark:text-gray-400 mb-2">{item.company}</div>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-12 text-center gradient-text"
          >
            Beyond Coding
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-8 rounded-2xl text-center cursor-pointer"
              >
                <interest.icon className="w-12 h-12 mx-auto mb-4 text-primary-500" />
                <div className="font-semibold text-gray-800 dark:text-white">{interest.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
