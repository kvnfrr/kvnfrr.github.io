"use client";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from 'next/image';

export default function HomePage() {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    gsap.fromTo(
      ".fade-up",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.3 }
    );

    const handleScroll = () => {
      const sections = ["top", "about", "projects", "experience", "contact"];
      const scrollY = window.scrollY;
      const offsets = sections.map(id => {
        const el = document.getElementById(id);
        return el ? el.offsetTop : 0;
      });
      const activeIndex = offsets.findIndex((offset, index) => {
        const nextOffset = offsets[index + 1] || Number.MAX_VALUE;
        return scrollY >= offset && scrollY < nextOffset;
      });
      setActiveSection(sections[activeIndex] || "top");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to bottom, #1A191D, #0E0E0E 50%)",
          transition: "background 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      ></div>

      {/* Navigation */}
<nav className="fixed top-0 left-0 right-0 flex items-center justify-center px-8 py-4 text-gray-400 text-sm uppercase tracking-widest backdrop-blur-md bg-black/50 z-50">
  <div
    className={`absolute left-8 text-2xl font-bold cursor-pointer transition-colors duration-300 z-50 text-gray-400 hover:text-[#27BE99]`}
    onClick={() => scrollToSection("top")}
  >&lt;KEVIN <span className="text-purple-500">FERRER</span>&gt;</div>
  <div className="flex gap-8 z-50">
    {[
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "contact", label: "Contact" }
    ].map((section) => (
      <span
        key={section.id}
        onClick={() => scrollToSection(section.id)}
        className={`cursor-pointer font-bold transition-colors duration-300 z-50 ${
          activeSection === section.id
            ? "text-[#27BE99]"
            : "text-gray-400 hover:text-[#27BE99]"
        }`}
      >
        &lt;{section.label}&gt;
      </span>
    ))}
  </div>
</nav>

      {/* Hero Section */}
      <section
        id="top"
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-[6rem] md:text-[10rem] font-bold leading-none fade-up text-gray-50 mt-24">
            KEVIN <span className="text-purple-500">FERRER</span>
          </h1>
          <p className="text-lg text-gray-400 mt-4 fade-up">
            SOFTWARE ENGINEER
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="fade-up mt-4 flex flex-col items-center">
          <p className="text-gray-500 mb-4 text-lg relative">
            SCROLL TO LEARN MORE
          </p>
          <div className=" mb-10 w-8 h-8 border-4 border-[#27BE99] rounded-full flex items-center justify-center animate-bounce">
            <span className="block w-2 h-2 bg-[#27BE99] rounded-full"></span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-8 md:px-16 bg-gray-800 text-center fade-up"
      >
        <h2 className="text-5xl font-bold text-white mb-8">About Me</h2>
        <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
          I specialize in crafting immersive, modern digital experiences using
          cutting-edge web technologies like <strong>React</strong>,
          <strong> Next.js</strong>, and <strong>Three.js</strong>. With a
          passion for creativity and performance, I bring ideas to life through
          code.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 px-8 md:px-16 bg-gray-900 text-center fade-up"
      >
        <h2 className="text-5xl font-bold text-white mb-8">Projects</h2>
        <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Explore some of my favorite projects that showcase my skills and
          experience in developing modern web applications.
        </p>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-24 px-8 md:px-16 bg-gray-800 text-center fade-up"
      >
        <h2 className="text-5xl font-bold text-white mb-8">Experience</h2>
        <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Learn about my professional journey and the roles I have undertaken in
          the tech industry to grow as a software engineer.
        </p>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-8 md:px-16 bg-gray-900 text-center fade-up"
      >
        <h2 className="text-5xl font-bold text-white mb-8">Contact</h2>
        <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Feel free to reach out to me via email or connect with me on LinkedIn
          to discuss potential opportunities or collaborations.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} KEVIN FERRER. All Rights Reserved.
      </footer>
    </main>
  );
}
