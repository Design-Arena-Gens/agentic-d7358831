'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@portfolio.com', link: 'mailto:hello@portfolio.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
  { icon: MapPin, label: 'Location', value: 'San Francisco, CA', link: '#' },
];

const socialLinks = [
  { icon: Github, label: 'Github', link: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com' },
  { icon: Twitter, label: 'Twitter', link: 'https://twitter.com' },
  { icon: Instagram, label: 'Instagram', link: 'https://instagram.com' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-effect p-8 rounded-3xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-800 dark:text-white transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-800 dark:text-white transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-800 dark:text-white transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-800 dark:text-white transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-xl text-green-700 dark:text-green-300"
                    >
                      Thank you! Your message has been sent successfully. I'll get back to you soon!
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={20} />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="glass-effect p-8 rounded-3xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                    >
                      <div className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          {item.label}
                        </div>
                        <div className="font-semibold text-gray-800 dark:text-white">
                          {item.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="glass-effect p-8 rounded-3xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  Follow Me
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-slate-800 rounded-xl hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:text-white transition-all"
                    >
                      <social.icon size={24} />
                      <span className="font-semibold">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="glass-effect p-8 rounded-3xl bg-gradient-to-br from-primary-500/10 to-accent-500/10"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Quick Response Guaranteed
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I typically respond to all inquiries within 24 hours. For urgent matters, feel free to call directly.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-3xl overflow-hidden h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-primary-500" />
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                Based in San Francisco
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Available for remote work worldwide
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
