'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Zap, Award, Users, Globe, Sparkles, TrendingUp, Shield, Rocket } from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: Code, title: 'Clean Code', description: 'Writing maintainable and scalable code with best practices' },
  { icon: Palette, title: 'Modern Design', description: 'Creating beautiful interfaces with attention to detail' },
  { icon: Zap, title: 'Performance', description: 'Optimized for speed and excellent user experience' },
  { icon: Award, title: 'Quality First', description: 'Delivering exceptional results with every project' },
  { icon: Users, title: 'User-Centric', description: 'Designing with the end user in mind' },
  { icon: Globe, title: 'Global Reach', description: 'Building solutions that work anywhere' },
  { icon: Sparkles, title: 'Innovation', description: 'Leveraging cutting-edge technologies' },
  { icon: TrendingUp, title: 'Growth Focus', description: 'Creating scalable solutions for business growth' },
  { icon: Shield, title: 'Security', description: 'Implementing robust security measures' },
  { icon: Rocket, title: 'Fast Delivery', description: 'Efficient development with rapid deployment' },
];

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '5+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              Creative Developer
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-700 dark:text-gray-300">
              Crafting Digital Experiences That Matter
            </p>
            <p className="text-lg md:text-xl mb-12 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Transforming ideas into stunning, high-performance web applications with modern design and cutting-edge technology
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
                >
                  View My Work
                  <ArrowRight size={20} />
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass-effect text-gray-800 dark:text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass-effect p-6 rounded-2xl">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 gradient-text">What I Offer</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive solutions for your digital needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect p-6 rounded-2xl card-hover cursor-pointer"
              >
                <feature.icon className="w-12 h-12 mb-4 text-primary-500" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center glass-effect p-12 rounded-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let's collaborate and bring your vision to life with exceptional design and development
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold text-xl shadow-lg hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              Start a Conversation
              <ArrowRight size={24} />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
