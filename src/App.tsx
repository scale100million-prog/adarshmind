/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users, 
  GraduationCap, 
  Calendar, 
  Award, 
  BookOpen, 
  ChevronRight,
  Instagram,
  Cpu,
  Zap,
  CheckCircle2,
  ArrowRight,
  BrainCircuit,
  Rocket,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const AdarshMindWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Results', href: '#results' },
    { name: 'Contact', href: '#contact' },
  ];

  const stats = [
    { label: 'Schools Impacted', value: '50+', icon: <Zap className="w-6 h-6" /> },
    { label: 'Students Trained', value: '10k+', icon: <Users className="w-6 h-6" /> },
    { label: 'Teachers Trained', value: '500+', icon: <GraduationCap className="w-6 h-6" /> },
    { label: 'Satisfaction Rate', value: '99%', icon: <ShieldCheck className="w-6 h-6" /> },
  ];

  const programs = [
    {
      title: 'Teacher AI Training',
      subtitle: '10 Intensive Sessions',
      desc: 'Transform your teaching staff into AI-powered educators. Save 10+ hours weekly on admin and prep.',
      features: [
        'AI Lesson Planning & Design',
        'Auto Worksheet & Quiz Gen',
        'Visual Teaching Content Creation',
        'AI Teaching Assistants Setup',
        'Classroom Automation Systems'
      ],
      outcome: 'Teachers build complete AI-powered teaching systems.',
      icon: <BrainCircuit className="w-10 h-10 text-light-red" />
    },
    {
      title: 'Student AI Program',
      subtitle: '10-Month Curriculum',
      desc: 'A comprehensive journey from AI thinking to building real-world projects.',
      features: [
        'Phase 1: AI Thinking & Study Skills',
        'Phase 2: Creativity & Productivity',
        'Phase 3: Build with AI (Projects)',
        'AI Safety, Ethics & Decision Making',
        'Final Showcase Event'
      ],
      outcome: 'Students build real projects + future skills.',
      icon: <Rocket className="w-10 h-10 text-light-red" />,
      highlight: true
    },
    {
      title: 'AI Smart School System',
      subtitle: 'Flagship Transformation',
      desc: 'Turn your school into an AI Smart School in just 60 days. The ultimate competitive edge.',
      features: [
        'Full Teacher & Student Programs',
        'Premium AI-Powered School Website',
        'Advanced LMS Implementation',
        'AI Branding & Certification',
        'AI Innovation Event Hosting'
      ],
      outcome: 'Complete institutional AI transformation.',
      icon: <Cpu className="w-10 h-10 text-light-red" />
    }
  ];

  const results = [
    { title: 'Increased Admissions', desc: 'Position your school as a future-ready leader to attract tech-savvy parents.', icon: <ArrowRight className="text-light-red" /> },
    { title: 'Better Engagement', desc: 'AI-powered learning keeps students excited and deeply involved in subjects.', icon: <ArrowRight className="text-light-red" /> },
    { title: 'AI-Powered Classrooms', desc: 'Seamlessly integrate AI tools into daily teaching and school management.', icon: <ArrowRight className="text-light-red" /> },
    { title: 'Parent Satisfaction', desc: 'Deliver the high-tech education parents are demanding for their children.', icon: <ArrowRight className="text-light-red" /> }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-light-red selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className={`text-2xl font-serif font-black tracking-tighter ${scrolled ? 'text-white' : 'text-white'}`}>
                ADARSH <span className="text-light-red">MIND</span>
              </span>
            </div>
            
            <div className="hidden md:flex space-x-10 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-white/80 hover:text-light-red transition-colors font-semibold text-sm uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://calendly.com/lagadabhay11/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-light-red text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-deep-red transition-all shadow-lg shadow-light-red/20"
              >
                Book a Demo
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-navy border-t border-white/10"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-4 text-base font-medium text-white hover:text-light-red border-b border-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4">
                  <a 
                    href="https://calendly.com/lagadabhay11/30min" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full text-center bg-light-red text-white py-4 rounded-xl font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1920" 
            alt="AI Education" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy/85"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl text-white font-black mb-6 leading-[1.1] tracking-tight font-sans">
              Transforming Education <br />
              <span className="text-light-red">Through Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
              Empowering students, schools & colleges with future-ready AI skills. <br className="hidden md:block" />
              <span className="text-white">Where Every Child’s Future Begins.</span>
            </p>
            <div className="flex justify-center">
              <a href="#programs" className="btn-primary text-lg px-12 py-4">
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-light-red py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white border-r border-white/10 last:border-0">
                <div className="text-3xl md:text-5xl font-black mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-navy mb-8 leading-tight">
                Not Just a School. <br />
                <span className="text-light-red">An AI Revolution.</span>
              </h2>
              <div className="space-y-6 text-lg text-navy/70 leading-relaxed">
                <p>
                  Adarsh Mind is a premier AI Smart School Transformation company dedicated to upgrading traditional educational systems for the 21st century. We don't just teach; we transform how schools operate and how students learn.
                </p>
                <p>
                  Our mission is to bridge the gap between current academic curricula and the rapidly evolving world of Artificial Intelligence. By empowering teachers and students with practical AI skills, we ensure that every school we partner with becomes a beacon of innovation and future-readiness.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                alt="AI Learning" 
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-navy p-10 rounded-3xl shadow-2xl hidden md:block border border-white/10">
                <p className="text-4xl font-black text-light-red mb-1">60 Days</p>
                <p className="text-xs text-white/60 uppercase tracking-widest">To Full AI Transformation</p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Future-Ready Skills', desc: 'Equipping students with the specific AI and prompt engineering skills the future job market demands.', icon: <Zap className="w-8 h-8 text-light-red" /> },
              { title: 'Practical Learning', desc: 'No theoretical fluff. Our programs focus on building real projects, websites, and AI tools.', icon: <Cpu className="w-8 h-8 text-light-red" /> },
              { title: 'Real Outcomes', desc: 'Measurable improvement in admissions, parent trust, and student engagement within one academic cycle.', icon: <CheckCircle2 className="w-8 h-8 text-light-red" /> }
            ].map((value, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-3xl card-shadow border border-navy/5"
              >
                <div className="mb-8">{value.icon}</div>
                <h3 className="text-2xl font-black text-navy mb-4">{value.title}</h3>
                <p className="text-navy/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-navy mb-6">Our Transformation Programs</h2>
            <p className="text-navy/50 max-w-2xl mx-auto text-lg font-medium">Strategic AI implementation designed for every level of the educational ecosystem.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {programs.map((program, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col p-10 rounded-[2.5rem] border ${program.highlight ? 'bg-navy text-white border-navy shadow-2xl shadow-navy/20 scale-105 z-10' : 'bg-off-white text-navy border-navy/5'}`}
              >
                {program.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-light-red text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">{program.icon}</div>
                <div className="mb-6">
                  <h3 className="text-3xl font-black mb-1">{program.title}</h3>
                  <p className={`text-sm font-bold uppercase tracking-widest ${program.highlight ? 'text-light-red' : 'text-light-red'}`}>{program.subtitle}</p>
                </div>
                <p className={`mb-8 leading-relaxed ${program.highlight ? 'text-white/70' : 'text-navy/60'}`}>{program.desc}</p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 flex-none text-light-red" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={`p-6 rounded-2xl mb-8 ${program.highlight ? 'bg-white/5 border border-white/10' : 'bg-navy/5 border border-navy/5'}`}>
                  <p className="text-xs font-black uppercase tracking-widest mb-1 opacity-50">Outcome</p>
                  <p className="font-bold text-sm">{program.outcome}</p>
                </div>

                <a 
                  href="https://calendly.com/lagadabhay11/30min" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-full py-4 rounded-2xl font-black text-center transition-all flex items-center justify-center gap-2 ${program.highlight ? 'bg-light-red text-white hover:bg-deep-red' : 'bg-navy text-white hover:bg-navy/90'}`}
                >
                  Book a Demo <ArrowRight size={18} />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-4 bg-navy text-white px-8 py-4 rounded-full font-black text-lg">
              👉 “Turn your school into an AI Smart School in 60 days”
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Real Results. <br />
                <span className="text-light-red">Proven Impact.</span>
              </h2>
              <p className="text-white/60 text-lg mb-12 leading-relaxed">
                Our transformation system is designed to deliver immediate value to school owners, teachers, and parents. We focus on the metrics that matter.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {results.map((result, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10">
                    <div className="mb-4">{result.icon}</div>
                    <h4 className="text-xl font-black mb-2">{result.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{result.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-light-red/20 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" 
                alt="Results" 
                className="relative rounded-[3rem] shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-navy mb-6">Inside the AI Classroom</h2>
            <p className="text-navy/50 max-w-2xl mx-auto text-lg font-medium">Witness the transformation in action across our partner schools.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {galleryImages.map((src, i) => (
              <div key={i} className={`overflow-hidden rounded-xl bg-off-white ${i === 0 ? 'md:col-span-2 md:row-span-2' : 'aspect-square'}`}>
                <img 
                  src={src} 
                  alt={`Gallery ${i + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-navy mb-8">Ready to <br /><span className="text-light-red">Transform?</span></h2>
              <p className="text-navy/60 text-lg mb-12 leading-relaxed">
                Book a personalized demo to see how Adarsh Mind can upgrade your school into an AI-powered institution.
              </p>
              <a 
                href="https://calendly.com/lagadabhay11/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 bg-light-red text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-deep-red transition-all shadow-2xl shadow-light-red/30"
              >
                Schedule Your Demo <ArrowRight size={24} />
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-off-white border border-navy/5">
                <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center text-light-red mb-6 shadow-xl shadow-navy/20">
                  <MapPin size={28} />
                </div>
                <h4 className="font-black text-navy text-lg mb-2">Location</h4>
                <p className="text-navy/50 font-medium text-sm">Pune, Maharashtra, India</p>
              </div>

              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-off-white border border-navy/5">
                <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center text-light-red mb-6 shadow-xl shadow-navy/20">
                  <Phone size={28} />
                </div>
                <h4 className="font-black text-navy text-lg mb-2">Call Us</h4>
                <p className="text-navy/50 font-medium text-sm">+91 9370452416</p>
              </div>

              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-off-white border border-navy/5">
                <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center text-light-red mb-6 shadow-xl shadow-navy/20">
                  <Mail size={28} />
                </div>
                <h4 className="font-black text-navy text-lg mb-2">Email Us</h4>
                <p className="text-navy/50 font-medium text-sm">adarshmind@gmail.com</p>
              </div>

              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-off-white border border-navy/5">
                <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center text-light-red mb-6 shadow-xl shadow-navy/20">
                  <Clock size={28} />
                </div>
                <h4 className="font-black text-navy text-lg mb-2">Hours</h4>
                <p className="text-navy/50 font-medium text-sm">Mon – Sun: 8AM – 10PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 md:col-span-2">
              <span className="text-3xl font-serif font-black tracking-tighter block mb-8">
                ADARSH <span className="text-light-red">MIND</span>
              </span>
              <p className="text-white/40 max-w-sm mb-10 font-medium leading-relaxed">
                Transforming traditional education into AI-powered excellence. Empowering the next generation of innovators in Pune and beyond.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/adarshminds/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-light-red hover:text-white transition-all border border-white/10"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-8 text-white/60">Quick Links</h4>
              <ul className="space-y-4 font-bold text-sm">
                <li><a href="#about" className="text-white/40 hover:text-light-red transition-colors">About Us</a></li>
                <li><a href="#programs" className="text-white/40 hover:text-light-red transition-colors">Programs</a></li>
                <li><a href="#results" className="text-white/40 hover:text-light-red transition-colors">Results</a></li>
                <li><a href="#contact" className="text-white/40 hover:text-light-red transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-8 text-white/60">Contact</h4>
              <p className="text-white/40 font-bold text-sm mb-4">Pune, Maharashtra</p>
              <p className="text-white/40 font-bold text-sm">adarshmind@gmail.com</p>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
            <p>© {new Date().getFullYear()} Adarsh Mind. All rights reserved.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdarshMindWebsite;
