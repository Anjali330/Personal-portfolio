'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: 'AI Content Generator',
      description: 'Revolutionary AI-powered platform that generates high-quality content in seconds.',
      tech: ['React', 'OpenAI API', 'TypeScript', 'Next.js'],
      image: '🤖',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Real-time Collaboration Tool',
      description: 'Seamless real-time editing platform for teams worldwide with instant sync.',
      tech: ['WebSocket', 'React', 'Node.js', 'MongoDB'],
      image: '🚀',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Mobile Payment App',
      description: 'Secure and intuitive payment solution with advanced encryption and analytics.',
      tech: ['React Native', 'Firebase', 'Stripe', 'Redux'],
      image: '💳',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'ML Predictive Analytics',
      description: 'Machine learning platform for predictive analytics and data visualization.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
      image: '📊',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const skills = [
    {
      category: 'Frontend Mastery',
      icon: '✨',
      items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Three.js'],
    },
    {
      category: 'Backend Power',
      icon: '⚡',
      items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    },
    {
      category: 'DevOps & Tools',
      icon: '🛠️',
      items: ['Docker', 'Kubernetes', 'AWS', 'Git', 'CI/CD'],
    },
    {
      category: 'AI & ML',
      icon: '🧠',
      items: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'RAG'],
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Technologies', value: '20+' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-black"></div>
        <div
          className="absolute w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl -top-40 -left-40"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-rose-500/15 rounded-full blur-3xl -bottom-40 -right-40"
          style={{
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0),rgba(0,0,0,1))]"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-indigo-500/20 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-300 via-violet-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
              Anjali Jaikalyani
            </div>
            <div className="flex gap-8 hidden md:flex">
              {['home', 'work', 'skills', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="capitalize text-slate-300 hover:text-white transition-colors duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-300 hover:to-pink-300 hover:bg-clip-text"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8 inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-500/30 rounded-full text-sm text-indigo-300 backdrop-blur-md">
                  ✨ Welcome to my digital space
                </span>
              </div>

              <h1 className="text-7xl md:text-6xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                  Aspiring Software Engineer
                </span>
                <br />
                <span className="text-white">& Problem Solver</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl">
                A learning-driven AIML student crafting interactive experiences and applying machine learning to solve real-world problems with clean, impactful code
              </p>

              <p className="text-lg text-slate-400 mb-12">
                ML integration · Full-stack development · Modern web technologies
              </p>

              <div className="flex gap-6 flex-wrap">
                <a
                  href="#work"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg font-semibold hover:shadow-2xl hover:shadow-indigo-500/50 transition-all transform hover:scale-105"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border-2 border-indigo-500/50 rounded-lg font-semibold hover:border-indigo-500 hover:bg-indigo-500/10 transition-all"
                >
                  Get in Touch
                </a>
              </div>

              {/* Floating Cards */}
              <div className="mt-12 grid grid-cols-1 gap-4">
                {[
                  { icon: '🚀', text: 'Fast & Responsive' },
                  { icon: '🎨', text: 'Beautiful Design' },
                  { icon: '🔒', text: 'Secure & Scalable' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white/5 border border-indigo-500/20 rounded-xl backdrop-blur-md hover:bg-white/10 transition-all transform hover:scale-105 flex items-center gap-3"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <p className="text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-pink-500/30 rounded-2xl blur-xl"></div>
              <div className="relative w-72 h-80 rounded-2xl overflow-hidden border-2 border-indigo-500/50 shadow-2xl shadow-indigo-500/30">
                <Image
                  src="/profile.jpg"
                  alt="Your Profile"
                  width={288}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="py-32 relative">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent">
                Featured Work
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-16">
              Innovative projects that showcase modern development practices
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-purple-500/20 backdrop-blur-md p-8 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <div className="text-6xl mb-4">{project.image}</div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#"
                      className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-500/50 to-pink-500/50 rounded-lg hover:from-indigo-500 hover:to-pink-500 transition-all transform group-hover:scale-110"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 relative">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl md:text-6xl font-black mb-16">
              <span className="bg-gradient-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillGroup, i) => (
                <div
                  key={i}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-indigo-500/20 backdrop-blur-md hover:border-indigo-500/50 transition-all transform hover:scale-105"
                >
                  <div className="text-5xl mb-4">{skillGroup.icon}</div>
                  <h3 className="text-2xl font-bold mb-6 text-white">{skillGroup.category}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skillGroup.items.map((skill, j) => (
                      <div
                        key={j}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-indigo-500/30 rounded-lg text-sm text-slate-300 group-hover:bg-gradient-to-r group-hover:from-indigo-500/30 group-hover:to-pink-500/30 transition-all"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 relative">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                Let's Create Together
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Have an amazing idea? Let's collaborate and bring it to life. I'm always excited about new projects.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <a
                href="mailto:your@email.com"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg font-semibold hover:shadow-2xl hover:shadow-indigo-500/50 transition-all transform hover:scale-105"
              >
                ✉️ Email Me
              </a>
              <a
                href="#"
                className="px-8 py-4 border-2 border-indigo-500/50 rounded-lg font-semibold hover:border-indigo-500 hover:bg-indigo-500/10 transition-all transform hover:scale-105"
              >
                💼 LinkedIn
              </a>
              <a
                href="#"
                className="px-8 py-4 border-2 border-indigo-500/50 rounded-lg font-semibold hover:border-indigo-500 hover:bg-indigo-500/10 transition-all transform hover:scale-105"
              >
                🐙 GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-indigo-500/20 py-12 text-center text-slate-500 bg-black/50 backdrop-blur-md">
          <p>© 2026 Your Name. Crafted with creativity & code ✨</p>
        </footer>
      </div>
    </div>
  );
}
