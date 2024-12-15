"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showName, setShowName] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      setShowName(true);
    }, 3500); // 3.5 seconds for "Welcome" to fade out

    const nameTimer = setTimeout(() => {
      setShowNav(true);
    }, 4500); // 1-second delay after name appears

    return () => {
      clearTimeout(introTimer);
      clearTimeout(nameTimer);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans">
      {/* Welcome Screen */}
      {showIntro && (
        <section className="absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-1000">
          <h2 className="text-5xl font-semibold tracking-wider animate-fade-out">
            Welcome
          </h2>
          <p className="mt-2 text-sm text-gray-400 animate-fade-out">
            Get ready to explore
          </p>
        </section>
      )}

      {/* Name and Occupation */}
      {showName && (
        <section className="absolute inset-0 flex flex-col items-center justify-center text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white">
            Kevin Ferrer
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-400">
            Software Engineer & something
          </p>
        </section>
      )}

      {/* Navigation Bar */}
      {showNav && (
        <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 text-sm uppercase tracking-wide animate-fade-in">
          <h1 className="text-xl font-bold"> &gt;KvnFrr</h1>
          <ul className="flex gap-6">
            <li>
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#expertise" className="hover:text-gray-400">
                Expertise
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </main>
  );
}
