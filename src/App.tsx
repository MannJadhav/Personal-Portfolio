/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Terminal, 
  User, 
  Cpu,
  ChevronRight,
  Send,
  Download,
  BookOpen, 
  Award,
  Globe,
  Phone,
  FileCheck,
  Zap,
  Lightbulb,
  MapPin,
  Layers,
  Building2,
  Trophy,
  Medal,
  Star,
  BrainCircuit,
  Microscope,
  ArrowUp,
  Twitter,
  Instagram,
  Sparkles,
  Database,
  Wrench,
  X,
  Users,
  Target,
  Play,
  MessageSquare,
  Loader2,
  CheckCircle2,
  Menu
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Form State
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch("https://formspree.io/f/xvgzloww", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Portfolio Message from ${formData.name}: ${formData.message || 'No additional message.'}`
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const scrollToSection = (e, id) => {
    if (e) e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'experience', 'achievements', 'projects', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -150 && rect.top <= 250;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experience = [
    {
      year: "2026 - Present",
      role: "Web Development Intern",
      company: "CITTA Technologies Pvt Ltd",
      location: "Mumbai, IN",
      desc: "Leading the development of 'Elevate Digital'. Focusing on interactive workflow architecture and SEO-performance optimization using React and Tailwind CSS."
    },
    {
      year: "2024 - 2025",
      role: "Full Stack Developer Intern",
      company: "Devion X Technologies",
      location: "Mumbai, IN",
      desc: "Modernized application UI using React.js. Engineered backend integration with Node.js/Express and implemented RESTful APIs to reduce latency by 30%."
    },
    {
      year: "2024",
      role: "Front-End Developer",
      company: "Uuns (Freelance)",
      location: "Remote",
      desc: "Architected a modular e-commerce frontend from the ground up. Developed reusable component libraries and secure authentication UI."
    }
  ];

  const aiStack = ["Python", "TensorFlow", "Scikit-Learn", "pandas", "NumPy", "Keras", "Matplotlib"];

  const techSkills = {
    languages: ["HTML", "CSS", "JavaScript", "Python", "C"],
    frameworks: ["React", "Node.js", "Express.js", "WordPress"],
    databases: ["MySQL", "MongoDB", "MongoDB Atlas"],
    tools: ["Git", "AWS", "GCP", "OCI", "VS Code", "PyCharm", "Jupyter Notebook"]
  };

  const researchPapers = [
    {
      title: "Intelligent Prediction of Chronic Kidney Disease Progression Using Ensemble and Deep Learning Methods",
      journal: "IJARCCE, May 2025",
      link: "https://ijarcce.com/papers/intelligent-prediction-of-ckd-progression-using-ensemble-and-deep-learning-methods/", 
      tags: ["Deep Learning", "HealthTech"]
    },
    {
      title: "Fraud Detection in Financial Transactions using Machine Learning",
      journal: "IC-ICN-2025, Feb 2025",
      link: "https://www.researchgate.net/publication/401204164_Fraud_Detection_in_Financial_Transactions_using_Machine_Learning", 
      tags: ["Fintech", "ML Research"]
    }
  ];

  const awards = [
    {
      id: 1,
      type: "Best Paper",
      title: "\"Fraud Detection in Financial Transactions using Machine Learning\"",
      subtitle: "TCET Mumbai | Feb'25",
      desc: "Research Excellence @ Multicon 2025. Recognized for innovative deep learning approaches in anomaly detection.",
      icon: <Trophy className="w-5 h-5" />,
      buttonText: "Read Publication",
      style: "light",
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczNRFNwACA2F51-Lmiu9rEMnOYF1cLzcjZKYw35iU2XbcL2xAVi8TA5b4ouLrX9hTB0KTfcuY3Pb5WnFK-vjKmnEJFOm1xnxHGECzvvibpBz9TPYYcyx1qC3ZHbl_rcexqXLNdaZPu5a_ss_DRm8kKwp1A=w1145-h859-s-no-gm",
      link: "https://www.researchgate.net/publication/401204164_Fraud_Detection_in_Financial_Transactions_using_Machine_Learning" 
    },
    {
      id: 2,
      type: "Project competition",
      title: "Mind's Eye-25 Winner",
      subtitle: "TCET MUMBAI | APRIL 25",
      desc: "Won among 25 participating groups for technical innovation and implementation @ TCET Mumbai.",
      icon: <Star className="w-5 h-5" />,
      buttonText: "View Details",
      style: "light",
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczMcUChcnEL1mA2SC0HpjSDltH_KBDU7tNP6EIkRhWYTVN77_9Xie84RIfmEDX8WnbF4aW2gt36AVff9gJfhXUtGJVFKRPyNQWW6EUJScZLeb7Jmxrw4B2ULVCd7Y05Jya_D2j8k6Eryz5q92aVAKYet9Q=w1025-h683-s-no-gm",
      hasDetails: true,
      longDesc: `
        I'm thrilled to announce that my team and I have won the Mind's Eye 2025 Project Competition at Thakur College of Engineering and Technology (TCET)! 🏆

        Our project, "TruthLense: An AI-Powered Fake News Detection & Summary System", is designed to combat the rising threat of misinformation by leveraging the power of artificial intelligence.

        🔍 Objective:
        To develop a robust machine learning system using Voting Classification integrated with Random Forest to accurately detect and classify fake news.

        🧠 Tools & Technologies Used:
        • Language: Python
        • Libraries: scikit-learn, pandas, numpy, matplotlib, seaborn, NLTK, TF-IDF, Hugging Face, Langchain
        • Environment: Jupyter Notebook, Google Colab
        • Dataset: Liar, Liar Pants on Fire
        • Deployment: Streamlit

        This achievement reflects our team’s dedication and collaboration. Huge thanks to our mentor Dr. Neha Patwari and my teammates Isha Kondurkar, Soham Khopkar, and Mohd Saif Dalkhaniya for their incredible efforts.

        Excited to further enhance TruthLense and explore the possibilities at the intersection of AI and responsible media. 🌐
      `,
      team: ["Isha Kondurkar", "Soham Khopkar", "Mohd Saif Dalkhaniya"],
      mentor: "Dr. Neha Patwari",
      link: "https://lnkd.in/dy9eZQ3M",
      secondaryImageUrl: "https://lh3.googleusercontent.com/pw/AP1GczNndz6TXw_bW4LmWn1RkjeeToAUeEU2h2v2CCPHgCWlWHDzs29zT4IEumnqQMzAUykYiKoBKl7pxnT1usNx9NKLjsPGClG9mJtCY8b-0rhzetJOhCnIkbn0-ubLJiVNE310Mki7gYwXoKg6WixSkUhZaQ=w1145-h859-s-no-gm"
    },
    {
      id: 3,
      type: "Hackathon",
      title: "Recognition HackWithMumbai 2025",
      subtitle: "Navi Mumbai | Sep 2025",
      desc: "Developed an AI-Powered Job/Internship Referral Portal at the 12-hour National Level Hackathon.",
      icon: <Zap className="w-5 h-5" />,
      buttonText: "View Details",
      style: "dark",
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczNQLFvAYhpfL_A7nSx6UMeT5h38PQWP4SRE-iyj9jhba6dwtP7-yGoyYt5pKXgvx9b7nCOjveo6tRDNRLNFof3sm9bvGkIt4ITcPhF63TUyQT8d4NQfdyhD8WxaBcW-tGZu8MQ3AF-4AtbxHYlqdhjDGA=w1527-h859-s-no-gm",
      hasDetails: true,
      longDesc: `
        Thrilled to share that I had the opportunity to participate in HackWithMumbai 2025, a 12-hour National Level Hackathon organized by HackwithIndia at Bharati Vidyapeeth (Deemed to be University), Navi Mumbai in September 2025 🚀

        Our team Blueprint worked on "Job/Internship Referral Portal" under the theme Full Stack, AI & ML.

        🔹 The Challenge:
        Alumni and seniors often have valuable connections, but there’s no structured way to share opportunities with juniors.

        🔹 Our Solution:
        A dedicated referral portal that bridges this gap by enabling:
        • Resume uploads with AI-driven keyword analysis
        • Skill-based job filtering & AI Job Match Score
        • Direct referral application system
        • Admin/Alumni dashboard for verified postings

        💡 Impact:
        • Juniors → Gain access to curated opportunities with higher chances of success.
        • Alumni → Contribute back to their alma mater.
        • Colleges → Strengthen placement stats and alumni networks.

        🏆 Grateful to receive a Certificate of Recognition for our contribution and innovation in this hackathon.
      `,
      team: ["Prince Chauhan", "Aryan Agrawal", "Priyanka Gupta"],
      mentor: "Blueprint (Mann Jadhav)",
      link: "https://lnkd.in/dwASnZmX"
    },
    {
      id: 4,
      type: "Hackathon",
      title: "MumbaiHacks 2025",
      subtitle: "NESCO | Nov 25",
      desc: "Winner of the largest AI Agentic Hackathon. Developed ORION — a structural forensics tool to combat misinformation.",
      icon: <Sparkles className="w-5 h-5" />,
      buttonText: "View Details",
      style: "light",
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczNBIQM7DA6_R94fDBzIz_OcVrqrYBc9EQmNDcMZKtO-eWJXiZalnIKzEhECAWi8c-nWk-0B3bLoehseCN3URp6rLPI6gtZc_OXSCzpIl_QMrqi4_9HePqxPH-pkFA2gCmOkaCrSQbkU9K_mdPTdEUL6RA=w1145-h859-s-no-gm", 
      hasDetails: true,
      longDesc: `
        🚀 MumbaiHacks 2025
        Organizer: Tech Entrepreneurs Association of Mumbai (TEAM) | Track: Misinformation | Team Name: Blueprint

        Project: ORION Misinformation Forensics Tool

        Problem Statement:
        Misinformation is rarely a single isolated lie — it's a structural web of half-truths, omitted context, and related conspiracies. Current fact-checking tools provide binary True/False verdicts but fail to visualize the genealogy of a lie. Users lack a tool for "Deep Dive" forensics that visually branches out from a surface-level claim to explore root causes, related entities, and source credibility in a non-linear, intuitive map.

        Solution — Two Components:
        1. The Shield Orion Browser Extension (In-Context Verification):
        Reads the active webpage (e.g., X/Twitter) to detect claims and generate confidence scores without disrupting the user's workflow. Provides immediate True/Misleading verdicts and cites primary sources directly in the sidebar.

        2. The Deep Dive GraphChat (Structural Forensics):
        Converts AI analysis into an interactive Knowledge Graph. Users branch out from a surface claim to visually explore its genealogy mapping connections between entities, court rulings, and statistical data in a unified view.

        Business Model:
        • B2C Freemium (Orion Pro): Paid tier for unlimited graph depth, PDF exports, and advanced AI models. Target: Researchers, Students, Power Users.
        • B2B SaaS (Orion for Newsrooms): Collaborative dashboard for journalism teams with shared graph workspaces. Target: Media Houses, NGOs.
        • API Economy: Verification API for third-party integration and widget licensing.
      `,
      team: ["Priyanka Gupta", "Dhruv Paste", "Ritish Jha"],
      mentor: "Mann Jadhav",
      link: "https://youtu.be/OzpUx326MaQ",
      secondaryImageUrl: "https://lh3.googleusercontent.com/pw/AP1GczOtIqB5WeF9r2wQa9Oqdh_N6Uo9I1G5ZCfQrDw09laAxyB4QCZFpp_jFX-8r6aRzS9hJaM9BJjSdQAydypgG9Xe5GOQp-ZFhwTgAgpgqzVswk3anXgielWO93vwnPpSTlumI056JUR3Ck3sZm09PgBG9w=w483-h859-s-no-gm"
    },
    {
      id: 5,
      type: "National Hackathon",
      title: "New India Vibrant Hackathon 2023",
      subtitle: "Surat | Nov 23",
      desc: "Developed 'Smart Health Care Locating System', recognized for innovative practical application in public health.",
      icon: <Globe className="w-5 h-5" />,
      buttonText: "View Details",
      style: "dark",
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczNXhkoGuDjmI9JlyPuUxFK2CYwFLAjKNo_kReZtcZ6SdXxWSyA3l9SXnWTBAb9Sy4ES62XAw6wusdqirOpfYNjPXB_0-H3DfL1czBSLSV19tWu_cWow2WyzCMzv42Pv6yKFljMdA9yA-cx4vgDgUf7oCg=w1145-h859-s-no-gm",
      link: "#",
      hasDetails: true,
      longDesc: `
        "New India Vibrant Hackathon! 2023" 🏆 organised by Gujarat Government took on the challenge of "Smart Health Care Locating System", and after countless hours of brainstorming, coding, and refining, we emerged victorious.

        🛠️ Our solution to the problem was designed to help people find and access healthcare services efficiently. Such a system can incorporate various technologies and features to enhance the patient experience and streamline healthcare delivery, demonstrating our commitment. We made a Multi Platform application.

        ● Key aspects of our project:
        1. User Friendly. 
        2. Map base Hospitals locating system. 
        3. Displaying Various Government health related Schemes and insurance.
        4. Electronic Health Record (EHR).

        ● Below are Our Innovation in this project and still it is under development process:
        1. AI Chat Bot.
        2. Real Time Ambulance tracking. 
        3. Web App.

        It was truly a testament to the power of collaboration, as each team member brought their unique strengths to the table.
      `,
      team: ["Ritesh Jha", "Aditya Gupta", "Aryan Agrawal", "Khushi Naudiyal"],
      mentor: "Mary Margarat",
      tertiaryImageUrl: "https://lh3.googleusercontent.com/pw/AP1GczN5tOkZ0XLCwG8Gs6idVUMwRon_by2sPEXInUWmIMjMRbFUDAYL-tQKM5aJqZtB53owG5YXfO7OD2qwWHkB39qxb0WqG99AgLJcMxHxTGkHGbMFsibCimzZ60kS2A_ZoCbFbGSJ1yuumdnCea_s-rOanQ=w1280-h755-s-no-gm"
    }
  ];

  const projects = [
    {
      title: "Orion: Misinformation Forensics",
      duration: "Aug’25 – Nov’25",
      desc: "Architected 'The Shield' browser extension for real-time analysis and 'GraphChat' for mapping misinformation genealogy using AI.",
      tech: ["AI", "Graph DB", "Browser Engine"],
      color: "border-blue-500/20"
    },
    {
      title: "Hybrid Credit Card Fraud Detection",
      duration: "Nov’24 – Jan’25",
      desc: "Engineered Random Forest, CNN, and SVM ensembles to identify financial anomalies with high precision using TensorFlow.",
      tech: ["Python", "Deep Learning", "SciKit"],
      color: "border-purple-500/20"
    },
    {
      title: "Uuns E-Commerce Platform",
      duration: "Sep’24 – Dec’24",
      desc: "Full-scale D2C platform deployment. Implemented a custom component library and secure authentication flow.",
      tech: ["React", "State Management", "Node.js"],
      color: "border-indigo-500/20"
    }
  ];

  return (
    <div className="dark bg-[#0a0a0c] text-slate-200 transition-colors duration-500 min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 backdrop-blur-xl bg-[#0a0a0c]/80 border-b border-white/5' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={(e) => scrollToSection(e, 'home')}>
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-sm group-hover:rotate-12 transition-transform shadow-[0_4px_15px_rgba(79,70,229,0.4)]">MJ</div>
            <span className="text-sm font-black tracking-[0.25em] uppercase text-white group-hover:text-indigo-500 transition-colors">MANN JADHAV</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {['home', 'experience', 'achievements', 'projects', 'about', 'contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`}
                onClick={(e) => scrollToSection(e, item)}
                className={`text-[10px] font-bold tracking-[0.25em] uppercase transition-all hover:text-indigo-500 ${activeSection === item ? 'text-indigo-500' : 'text-slate-500'}`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Actions: Hamburger Toggle */}
          <div className="flex md:hidden items-center">
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-1">
               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`absolute top-full left-0 w-full bg-[#0a0a0c] border-b border-white/5 transition-all duration-300 overflow-hidden md:hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-8 py-10 flex flex-col space-y-6">
            {['home', 'experience', 'achievements', 'projects', 'about', 'contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`}
                onClick={(e) => scrollToSection(e, item)}
                className={`text-xs font-black tracking-[0.3em] uppercase transition-all ${activeSection === item ? 'text-indigo-500' : 'text-slate-500'}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-[56px] font-black leading-[1.1] tracking-tighter mb-8 text-white uppercase">
                SOFTWARE <br/> ENGINEER <br/> <span className="text-indigo-600">& RESEARCHER.</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-10 font-medium text-justify">
                Information Technology student at <span className="font-bold text-white underline decoration-indigo-500 decoration-2 underline-offset-4">TCET Mumbai</span>. 
                Specializing in building high-performance web systems and deep learning applications.
              </p>
              <div className="flex wrap gap-6">
                <button onClick={(e) => scrollToSection(e, 'projects')} className="px-8 py-4 bg-indigo-600 text-white text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20">
                  Explore Work
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative flex justify-center lg:block">
              <div className="relative group">
                <div className="absolute inset-0 bg-indigo-600 rounded-[60px] rotate-6 group-hover:rotate-3 transition-transform opacity-10"></div>
                <div className="relative aspect-[4/5] rounded-[60px] bg-[#151518] border border-white/5 overflow-hidden flex items-center justify-center">
                   <img 
                    src="https://lh3.googleusercontent.com/pw/AP1GczNdqpOh72vezrDoZDgd8zJMeqldE0K-P8f8WtBecYhPCa5jC6fD2I94d-y3GScvCrk-kRTkAx5TzpyKfN8pN_XS9-QsQNu1ISwqAAtWR0r_9N3xLX827K6cL7oqtTnxHOfqdDEtgildHMJK85MEhsHfZw=w859-h859-s-no-gm" 
                    alt="Mann Jadhav" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                   />
                   <div className="absolute bottom-8 left-8 right-8 bg-black/50 backdrop-blur-xl p-5 rounded-3xl border border-white/10">
                      <div className="flex justify-between items-center mb-1">
                         <span className="text-[10px] font-black tracking-widest text-indigo-500 uppercase">Current Status</span>
                         <div className="flex space-x-1">
                           <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                           <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                         </div>
                      </div>
                      <p className="text-sm font-bold truncate tracking-tight text-white">Internship @ CITTA Tech</p>
                      <p className="text-[10px] text-slate-500 font-medium">Mumbai, India</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-8 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-xs font-black text-indigo-500 uppercase tracking-[0.4em] mb-4">Professional Path</h2>
            <h3 className="text-4xl font-black tracking-tighter text-white uppercase">EXPERIENCE.</h3>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10"></div>
            <div className="space-y-16">
              {experience.map((exp, i) => (
                <div key={i} className="relative flex flex-col md:flex-row items-center group">
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-[#0c0c0e] z-10 group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(79,70,229,0.5)]"></div>
                  <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? 'text-right pr-12' : 'order-last text-left pl-12'}`}>
                    <span className="text-xl font-black text-slate-800 tracking-tighter">{exp.year}</span>
                  </div>
                  <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-right'}`}>
                    <div className="p-6 rounded-[32px] bg-[#111114] border border-white/5 hover:border-indigo-500/50 transition-all shadow-sm hover:shadow-xl">
                      <div className={`flex flex-col ${i % 2 !== 0 ? 'md:items-end' : ''} mb-3`}>
                        <div className="md:hidden mb-2">
                          <span className="text-[10px] font-black px-3 py-1 rounded-full bg-indigo-600/10 text-indigo-500 uppercase tracking-widest">{exp.year}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white tracking-tight">{exp.role}</h4>
                        <div className="flex items-center gap-2 text-indigo-500 font-bold text-[10px] uppercase tracking-wider mt-1">
                          <Building2 className="w-3 h-3" />
                          <span>{exp.company}</span>
                          <span className="text-slate-700">•</span>
                          <span className="text-slate-500">{exp.location}</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed font-medium text-justify">{exp.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
          <h2 className="text-4xl font-black tracking-tighter mb-3 text-white uppercase">Achievements & Awards</h2>
          <div className="h-1 w-12 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="flex space-x-8 animate-scroll whitespace-nowrap hover:pause-scroll px-8 pb-4">
            {[...awards, ...awards].map((award, i) => (
              <div 
                key={`${award.id}-${i}`} 
                onClick={() => award.hasDetails && setSelectedAward(award)}
                className={`inline-block whitespace-normal w-[350px] md:w-[400px] p-8 md:p-10 rounded-[50px] border-2 transition-all hover:-translate-y-4 shadow-sm hover:shadow-2xl shrink-0 cursor-pointer
                  ${award.style === 'dark' 
                    ? 'bg-slate-900 text-white border-white/5' 
                    : 'bg-[#111114] text-white border-white/5'}`}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-indigo-400">
                    {award.icon}
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-400">
                    {award.type}
                  </h4>
                </div>

                <div className="relative aspect-[4/3] rounded-3xl bg-black/20 overflow-hidden mb-8 border border-white/5 flex items-center justify-center">
                  {award.imageUrl ? (
                    <img 
                      src={award.imageUrl} 
                      alt={award.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  ) : null}
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
                    <Medal className="w-12 h-12 text-slate-400 opacity-20" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 z-10">
                     <p className="text-white text-[10px] font-black uppercase tracking-widest">{award.subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-col h-[200px]">
                  <h3 className="text-xl font-bold mb-4 leading-tight text-justify">{award.title}</h3>
                  <p className="text-sm leading-relaxed mb-8 font-medium text-slate-400 text-justify">
                    {award.desc}
                  </p>
                  <a 
                    href={award.hasDetails ? undefined : award.link} 
                    target={award.hasDetails ? undefined : "_blank"}
                    rel={award.hasDetails ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                      if(award.hasDetails) {
                        e.preventDefault();
                        setSelectedAward(award);
                      }
                    }}
                    className={`mt-auto py-4 text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all shadow-lg text-center
                    ${award.style === 'dark' 
                      ? 'bg-white text-slate-900 hover:bg-indigo-100' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/20'}`}
                  >
                    {award.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Details Modal */}
        {selectedAward && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <div 
              className="absolute inset-0 bg-[#0a0a0c]/90 backdrop-blur-md"
              onClick={() => setSelectedAward(null)}
            ></div>
            <div className="relative bg-[#111114] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[40px] border border-white/5 shadow-2xl">
              <button 
                onClick={() => setSelectedAward(null)}
                className="absolute top-8 right-8 p-2 rounded-full bg-white/5 hover:bg-indigo-600 hover:text-white transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-12">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="text-indigo-500">{selectedAward.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">{selectedAward.type}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2 leading-tight text-justify">
                  {selectedAward.title}
                </h2>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
                  {selectedAward.subtitle}
                </p>

                <div className="grid md:grid-cols-12 gap-12">
                  <div className="md:col-span-7">
                    <div className="prose prose-invert max-w-none">
                      <p className="text-lg leading-relaxed text-slate-400 font-medium whitespace-pre-line text-justify">
                        {selectedAward.longDesc}
                      </p>
                    </div>
                    {selectedAward.link && selectedAward.link !== '#' && (
                      <div className="mt-12">
                        <a 
                          href={selectedAward.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-3 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20"
                        >
                          <Play className="w-4 h-4" />
                          <span>View Demo / Resource</span>
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-5 space-y-8">
                    <div className="p-8 rounded-3xl bg-black/20 border border-white/5">
                      <div className="flex items-center space-x-3 mb-6">
                        <Users className="w-5 h-5 text-indigo-500" />
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-white">Team Members</h4>
                      </div>
                      <ul className="space-y-3">
                        {selectedAward.team?.map((name, idx) => (
                          <li key={idx} className="text-sm font-bold flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                            <span>{name}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8 pt-8 border-t border-white/5">
                        <div className="flex items-center space-x-3 mb-4">
                          <Target className="w-5 h-5 text-indigo-500" />
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-white">Leadership / Mentor</h4>
                        </div>
                        <p className="text-sm font-bold">{selectedAward.mentor}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                        {selectedAward.imageUrl && (
                          <div className="rounded-3xl overflow-hidden border border-white/5">
                            <img src={selectedAward.imageUrl} alt="Project primary" className="w-full h-auto" />
                          </div>
                        )}
                        {selectedAward.secondaryImageUrl && (
                          <div className="rounded-3xl overflow-hidden border border-white/5">
                            <img src={selectedAward.secondaryImageUrl} alt="Project secondary" className="w-full h-auto" />
                          </div>
                        )}
                        {selectedAward.tertiaryImageUrl && (
                          <div className="rounded-3xl overflow-hidden border border-white/5">
                            <img src={selectedAward.tertiaryImageUrl} alt="Project tertiary" className="w-full h-auto" />
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-8 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-3 text-white uppercase">Selected Works</h2>
            <div className="h-1 w-12 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className={`group bg-[#111114] border-2 ${p.color} p-8 rounded-[40px] transition-all hover:-translate-y-4 shadow-sm hover:shadow-2xl`}>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl text-indigo-500"><Terminal className="w-5 h-5" /></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{p.duration}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white leading-tight text-justify">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium text-justify">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="text-[9px] font-black uppercase text-indigo-500 border border-indigo-500/20 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Bento Grid */}
      <section id="about" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-5">
            <div className="md:col-span-2 p-8 rounded-[40px] bg-[#111114] border border-white/5 shadow-sm">
              <h3 className="text-xs font-black text-indigo-500 uppercase tracking-widest mb-4">Education</h3>
              <p className="text-xl font-bold mb-2 text-white">Bachelor of Engineering, IT</p>
              <p className="text-slate-500 font-medium mb-4 text-sm">Mumbai University, Thakur College (TCET)</p>
              <div className="flex gap-10">
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 mb-1">CGPA</p>
                  <p className="text-lg font-black text-indigo-600">7.89 / 10</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Graduation</p>
                  <p className="text-lg font-black text-white">June 2026</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 p-8 rounded-[40px] bg-indigo-600 text-white flex flex-col justify-center shadow-lg shadow-indigo-500/20">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-3 text-white">Leadership</h4>
              <h3 className="text-xl font-black mb-3">Founder & Chairperson @ TechCatalyst SIG</h3>
              <p className="text-xs opacity-80 leading-relaxed font-medium text-justify">Mentoring junior teams for national hackathons and organizing technical workshops in AI/ML, IoT & Software Development.</p>
            </div>

            <div className="md:col-span-2 p-8 rounded-[40px] bg-[#111114] border border-white/5 shadow-sm">
               <div className="flex items-center space-x-3 mb-4">
                  <BrainCircuit className="w-5 h-5 text-indigo-500" />
                  <h3 className="text-xs font-black text-indigo-500 uppercase tracking-widest">Artificial Intelligence</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                 {aiStack.map((skill, i) => (
                   <span key={i} className="px-4 py-2 rounded-2xl bg-black/40 text-[10px] font-bold border border-white/5 hover:border-indigo-500/50 transition-all text-white">
                     {skill}
                   </span>
                 ))}
               </div>
            </div>

            <div className="md:col-span-2 p-8 rounded-[40px] bg-[#111114] border border-white/5 shadow-sm">
               <div className="flex items-center space-x-3 mb-4">
                  <Microscope className="w-5 h-5 text-indigo-500" />
                  <h3 className="text-xs font-black text-indigo-500 uppercase tracking-widest">Research Publications</h3>
               </div>
               <div className="space-y-3">
                 {researchPapers.map((paper, i) => (
                   <a 
                    key={i} 
                    href={paper.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block group p-3 rounded-2xl bg-black/20 border border-transparent hover:border-indigo-500/50 transition-all"
                   >
                     <div className="flex justify-between items-start mb-1">
                        <p className="text-[11px] font-bold text-white leading-tight group-hover:text-indigo-500 transition-colors text-justify">{paper.title}</p>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-indigo-500 shrink-0 mt-1 ml-2" />
                     </div>
                     <p className="text-[9px] text-slate-500 font-medium">{paper.journal}</p>
                   </a>
                 ))}
               </div>
            </div>

            {/* Technical Skills Card */}
            <div className="md:col-span-4 p-8 rounded-[40px] bg-[#111114] border border-white/5 shadow-sm">
               <div className="flex items-center space-x-3 mb-8">
                  <Wrench className="w-5 h-5 text-indigo-500" />
                  <h3 className="text-xs font-black text-indigo-500 uppercase tracking-widest">Technical Skills</h3>
               </div>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                 <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-4 tracking-[0.2em]">Languages</p>
                   <div className="flex flex-wrap gap-2">
                     {techSkills.languages.map((s, idx) => (
                       <span key={idx} className="px-4 py-2 rounded-2xl bg-black/40 text-[10px] font-bold border border-white/5 hover:border-indigo-500/50 transition-all text-white">
                         {s}
                       </span>
                     ))}
                   </div>
                 </div>
                 <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-4 tracking-[0.2em]">Frameworks</p>
                   <div className="flex flex-wrap gap-2">
                     {techSkills.frameworks.map((s, idx) => (
                       <span key={idx} className="px-4 py-2 rounded-2xl bg-black/40 text-[10px] font-bold border border-white/5 hover:border-indigo-500/50 transition-all text-white">
                         {s}
                       </span>
                     ))}
                   </div>
                 </div>
                 <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-4 tracking-[0.2em]">Databases</p>
                   <div className="flex flex-wrap gap-2">
                     {techSkills.databases.map((s, idx) => (
                       <span key={idx} className="px-4 py-2 rounded-2xl bg-black/40 text-[10px] font-bold border border-white/5 hover:border-indigo-500/50 transition-all text-white">
                         {s}
                       </span>
                     ))}
                   </div>
                 </div>
                 <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-4 tracking-[0.2em]">Developer Tools</p>
                   <div className="flex flex-wrap gap-2">
                     {techSkills.tools.map((s, idx) => (
                       <span key={idx} className="px-4 py-2 rounded-2xl bg-black/40 text-[10px] font-bold border border-white/5 hover:border-indigo-500/50 transition-all text-white">
                         {s}
                       </span>
                     ))}
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-black tracking-tighter mb-8 text-white uppercase leading-none">Get In <br/> Touch.</h2>
            <div className="space-y-8">
              <div className="flex items-center space-x-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all"><Mail className="w-5 h-5"/></div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-lg font-bold text-white">jadhavmann.mj@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all"><MapPin className="w-5 h-5"/></div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Base</p>
                  <p className="text-lg font-bold text-white">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#111114] p-10 rounded-[50px] border border-white/5 shadow-sm">
            <form className="space-y-6" onSubmit={handleFormSubmit}>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                   <input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/40 border-none rounded-2xl px-5 py-3 text-sm font-bold focus:ring-2 focus:ring-indigo-500 transition-all" 
                    placeholder="John Doe" 
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                   <input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/40 border-none rounded-2xl px-5 py-3 text-sm font-bold focus:ring-2 focus:ring-indigo-500 transition-all" 
                    placeholder="john@company.com" 
                   />
                 </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message (Optional)</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full bg-black/40 border-none rounded-2xl px-5 py-3 text-sm font-bold focus:ring-2 focus:ring-indigo-500 transition-all resize-none" 
                    placeholder="Write your message here..."
                  />
               </div>
               <button 
                type="submit"
                disabled={formStatus === 'sending'}
                className={`w-full py-4 text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl active:scale-95 flex items-center justify-center space-x-3
                  ${formStatus === 'success' ? 'bg-green-600 shadow-green-500/20' : 'bg-indigo-600 shadow-indigo-500/20 hover:bg-indigo-700'}`}
               >
                 {formStatus === 'sending' ? (
                   <Loader2 className="w-4 h-4 animate-spin" />
                 ) : formStatus === 'success' ? (
                   <>
                    <span>Sent Successfully</span>
                    <CheckCircle2 className="w-4 h-4" />
                   </>
                 ) : (
                   <>
                    <span>Dispatch Message</span>
                    <Send className="w-4 h-4" />
                   </>
                 )}
               </button>
               {formStatus === 'error' && (
                 <p className="text-xs text-red-500 font-bold text-center mt-2">Failed to send. Please try again or email directly.</p>
               )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#08080a] pt-20 pb-12 px-8 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-end">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase mb-6 leading-none">
                Let's Build <br/> The Future.
              </h2>
              <p className="text-slate-400 text-base max-w-md font-medium leading-relaxed">
                Currently open to industrial project collaborations and deep learning research opportunities.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end space-y-5">
              <button 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="group flex items-center space-x-4 px-8 py-5 bg-indigo-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-500/20"
              >
                <span>Start a Conversation</span>
                <MessageSquare className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </button>
              <div className="flex space-x-3">
                {[
                  { icon: <Linkedin className="w-4 h-4"/>, link: "https://www.linkedin.com/in/mannjadhav2001/", name: "LinkedIn" },
                  { icon: <Github className="w-4 h-4"/>, link: "https://github.com/MannJadhav", name: "GitHub" },
                  { icon: <Instagram className="w-4 h-4"/>, link: "https://www.instagram.com/theoptimisticguy__", name: "Instagram" }
                ].map((social) => (
                  <a 
                    key={social.name} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-indigo-500 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16 pt-12 border-t border-white/5">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-xs">MJ</div>
                <span className="text-[10px] font-black tracking-widest uppercase text-white">Mann Jadhav</span>
              </div>
              <p className="text-[10px] font-medium text-slate-500 leading-relaxed uppercase tracking-widest">
                Software Engineer & ML Researcher based in Mumbai. Specializing in high-performance web systems and intelligence.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-6">Navigation</h4>
              <ul className="space-y-3">
                {['home', 'experience', 'achievements', 'projects', 'about'].map(item => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={(e) => scrollToSection(e, item)} className="text-[10px] font-bold text-slate-400 hover:text-indigo-500 transition-colors uppercase">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-6">Base</h4>
              <div className="space-y-2 text-[10px] font-bold text-slate-400">
                <p>Thakur College of Engineering & Tech</p>
                <p>Kandivali, Mumbai - 400101</p>
                <p className="text-indigo-600 mt-3">jadhavmann.mj@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
            <button 
              onClick={(e) => scrollToSection(e, 'home')}
              className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors group"
            >
              <span>Elevate to top</span>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all shadow-lg">
                <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }
        html { scroll-behavior: smooth; }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-350px * 5 - 2rem * 5)); }
        }

        @media (min-width: 768px) {
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-400px * 5 - 2rem * 5)); }
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .hover\\:pause-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default App;
