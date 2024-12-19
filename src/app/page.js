"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from 'next/image';

export default function HomePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".fade-up",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.3 }
    );
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.svg" // Path to your SVG file
          alt="Background Shape"
          width={2000} // Base dimensions (adjust based on design)
          height={1350}
          objectFit="none" // Keeps the entire shape visible
          objectPosition="center" // Adjusts position to sit higher
          style={{ top: "20%", transform: "translateX(13%)",}}
          className="opacity-20"
        />
      </div>


      {/* Navigation */}
      <nav className="absolute top-8 left-0 right-0 flex justify-center gap-8 text-gray-400 text-sm uppercase tracking-widest">
        <a href="#" className="hover:text-gray-100 transition">&lt;Home&gt;</a>
        <a href="#projects" className="hover:text-gray-100 transition">&lt;Projects&gt;</a>
        <a href="#experience" className="hover:text-gray-100 transition">&lt;Experience&gt;</a>
        <a href="#contact" className="hover:text-gray-100 transition">&lt;Contact&gt;</a>
        <a href="#resume" className="hover:text-gray-100 transition">&lt;Resume&gt;</a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-[6rem] md:text-[10rem] font-bold leading-none fade-up text-gray-50">
          KEVIN <span className="text-purple-500">FERRER</span>
        </h1>
        <p className="text-lg text-gray-400 mt-4 fade-up">
          SOFTWARE ENGINEER
        </p>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce fade-up">
          <span className="text-gray-500 text-2xl">↓</span>
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

      {/* Contact Section */}
      <footer className="py-12 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} KEVIN FERRER. All Rights Reserved.
      </footer>
    </main>
  );
}