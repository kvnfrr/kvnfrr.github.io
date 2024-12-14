import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-sm md:text-base text-gray-400 mb-2">Welcome to My Portfolio, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
            Kevin Ferrer,
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-blue-400 mb-4">
            a Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I specialize in developing efficient, user-focused software, leveraging advanced AI 
            to enhance functionality and accessibility. I am driven to create intuitive and inclusive solutions to everyday problems.
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <Image
            src="/images/profile.JPG" // Replace with your actual photo path
            alt="Kevin Ferrer Profile Photo"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
