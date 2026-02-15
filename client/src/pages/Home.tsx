import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Profile1 from "../assets/Profile1.png";
import kv from "../assets/KV.png";
import unikl from "../assets/Unikl.png";
import BowlFitLogo from "../assets/BowlFitLogo.png";
import logoFYNX from "../assets/logoFYNX.png";
import meowtourlogo from "../assets/meowtourlogo.png";
import bg from "../assets/bg.jpg";
import musicplayer from "../assets/musicplayer.png";
import portfoliologo from "../assets/portfoliologo.png";
import miniProjectsLogo from "../assets/miniProjectsLogo.png";
import bg2 from "../assets/bg2.jpg";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // NOTE: Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your actual EmailJS credentials
    emailjs
      .sendForm("service_7gpl205", "template_hvyiogb", form.current!, {
        publicKey: "Ce_34BUftUuwWxfve",
      })
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message: " + error.text);
        },
      );
  };
  return (
    <>
      <section
        className="h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600"
          >
            HAFIY 'AZIZAN
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl md:text-2xl text-gray-300"
          >
            Software Engineer Student | Aspiring Full-Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <div className="flex gap-4 items-center justify-center">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="bg-linear-to-tb from-gray-900 to-gray-800">
        <section id="about" className="section-container">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
            About Me
          </h2>
          <div className="glass-card p-8 md:flex gap-8 items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="aspect-ratio rounded-2xl overflow-hidden bg-gray-700 w-full max-w-75 mx-auto">
                <img
                  src={Profile1}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{ backgroundImage: `url(${bg2})` }}
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Software Engineering Student | Available for Internship March
                2026 - 3 July 2026 | Dedicated Software Engineering
                <br />
                <br />
                student seeking an internship opportunity starting March 2026. I
                have a strong foundation in full-stack development, with
                hands-on experience building complex web applications using
                ASP.NET, C#, JavaScript and SQL. I am eager to apply my
                technical skills in a real-world environment.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section-container">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-1 bg-purple-500 rounded-full"></span>
            Experience
          </h2>
          <div className="space-y-6 relative border-l-2 border-white/10 ml-4 pl-8">
            <div className="relative">
              <span className="absolute -left-10.25 top-0 w-5 h-5 rounded-full bg-purple-500 border-4 border-gray-900"></span>
              <div className="glass-card p-6 hover:bg-white/5 transition-colors">
                <h3 className="text-xl font-bold text-white">
                  Internship & Full-Time Technician
                </h3>
                <p className="text-blue-400 font-medium">
                  Hafiz Safety & Security Services • Apr 2022 — Jan 2023
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Configure and maintained IP-Based surveillance system,
                    involving network setup and port forwarding.
                  </li>
                  <li>
                    Diagnosed and resolved complex hardware and software
                    connectivity issue for clients.
                  </li>
                  <li>
                    Manage system integration between NVR and remote monitoring
                    application.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section-container">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-1 bg-green-500 rounded-full"></span>
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <div className="flex justify-center items-center">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="aspect-rectangular rounded-2xl overflow-hidden bg-gray-700 w-full max-w-75 mx-auto">
                    <img
                      src={kv}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <br />
                </div>
              </div>
              <h3 className="text-xl font-bold">
                Diploma Vocational Malaysia In Electronics Technology
              </h3>
              <p className="text-gray-400">
                Kolej Vocational Seri Iskandar, Perak • 2021 - 2025
              </p>
              <p className="mt-2 text-gray-300">CGPA: 3.79</p>
            </div>
            <div className="glass-card p-6">
              <div className="flex justify-center items-center">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="aspect-rectangular rounded-2xl overflow-hidden bg-gray-700 w-full max-w-75 mx-auto">
                    <img
                      src={unikl}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <br />
                </div>
              </div>
              <h3 className="text-xl font-bold">
                Bachelor of Information Technology In Software Engineering{" "}
              </h3>
              <p className="text-gray-400">
                UniKL MIIT, Kuala Lumpur • 2023 - Present
              </p>
              <p className="mt-2 text-gray-300">CGPA: 3.32</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-container">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-1 bg-pink-500 rounded-full"></span>
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="glass-card overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <img
                  src={meowtourlogo}
                  alt="Project 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href="#"
                    className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Cinema Ticketing Mobile App
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  A full-stack mobile application for cinema ticket booking and
                  management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    Flutter
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    Dart
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="glass-card overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <img
                  src={BowlFitLogo}
                  alt="Project 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Link
                    to="BowlFit"
                    className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Bowling Fitness Tracker
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  A Web-based Performance and Tracking for Bowling Enthusiasts.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    ASP.Net
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    HTML
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    CSS
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    C#
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    SQL Server
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    JavaScript
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="glass-card overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <img
                  src={logoFYNX}
                  alt="Project 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href="#"
                    className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>{" "}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  FYNX E-Comerce Website
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  A modern e-commerce platform built with React and Firebase.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    Firebase
                  </span>
                </div>
              </div>
            </div>
            {/* Project Card 4 */}
            <div className="glass-card overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <img
                  src={musicplayer}
                  alt="Project 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href="#"
                    className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Music Player Mobile App
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  A mobile music player application built with Flutter and Dart.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    Flutter
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    Dart
                  </span>
                </div>
              </div>
            </div>
            {/* Project Card 5 */}
            <div className="glass-card overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <img
                  src={portfoliologo}
                  alt="Project 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href="#"
                    className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-gray-400 text-sm mb-4">
                  A responsive portfolio website built with React and Tailwind
                  CSS.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    HTML
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    CSS
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    JavaScript
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
            {/* Project Card 6 */}
            <div className="glass-card overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <img
                  src={miniProjectsLogo}
                  alt="Project 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href="#"
                    className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Other Mini Project Website
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Mini Project compilation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    HTML
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    CSS
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    JavaScript
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section-container relative z-10">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-1 bg-yellow-500 rounded-full"></span>
            Skills
          </h2>
          <div className="glass-card p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "React",
                    "Tailwind CSS",
                    "Bootstrap",
                    "TypeScript",
                    "JavaScript",
                    "Flutter",
                    "Dart",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="relative z-20 inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-blue-500/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "Python",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "C#",
                    ".NET",
                    "SQL Server",
                    "Dart",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="relative z-20 inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-blue-500/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Other Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Figma",
                    "Canva",
                    "Communication",
                    "VS Code",
                    "Problem Solving",
                    "Time Management",
                    "Git",
                    "Team Work",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="relative z-20 inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-blue-500/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="section-container">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-red-500 rounded-full"></span>
              Contact Me
            </h2>
            <div className="glass-card p-6 mb-6 justify-center items-center text-center">
              <p>
                Email:{" "}
                <a href="mailto:muhdhfy02@gmail.com">
                  <u>muhdhfy02@gmail.com</u>
                </a>
              </p>
              <p>Phone: +6019-9182528</p>
              <p>Location: Bandar Puncak Alam, Selangor, Malaysia</p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/Hafiy-Azizan"
                  target="_blank"
                >
                  <u>linkedin.com/in/Hafiy-Azizan</u>
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a href="https://github.com/TuanFiy" target="_blank">
                  <u>github.com/TuanFiy</u>
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a href="https://www.instagram.com/fiyynixx" target="_blank">
                  <u>instagram.com/fiyynixx</u>
                </a>
              </p>
            </div>
            <div className="glass-card p-6">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors h-32"
                    placeholder="Let's have a chat"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
