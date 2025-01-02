"use client";

import React from "react";
import { motion } from "framer-motion";

const WhyUs: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#1A1B4B] via-[#893cfc] to-[#FF3366] text-white">
      {/* Fullscreen Auto Start Video */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/Images/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover, optimize, and regulate
            <br />
            your entire Software landscape.
          </motion.h1>
        </div>
      </div>

      {/* Section 1: Join the Best */}
      <section className="container mx-auto py-16 px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          JOIN THE BEST
        </motion.h2>
        <p className="text-lg mb-8">
          200+ companies worldwide manage and govern SaaS with{" "}
          <span className="text-[#FF3366] font-bold">Forescribe</span>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["FLOWCODE", "DATADOG", "THB", "JBi Digital"].map((company, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-6 rounded-lg shadow-lg text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <p className="text-xl font-semibold">{company}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2: Cards */}
      <section className="container mx-auto py-16 px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Forescribe <span className="text-[#FF3366]">Features</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <motion.div
            className="bg-gradient-to-br from-[#FF3366] to-[#893cfc] p-6 rounded-lg shadow-lg text-white flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl font-bold mb-4">
              35% or more licenses are wasted or overlap with other Apps.
            </p>
            <button className="mt-4 bg-white text-[#FF3366] font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition">
              Learn More
            </button>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-gradient-to-br from-[#893cfc] to-[#1A1B4B] p-6 rounded-lg shadow-lg text-white flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl font-bold mb-4">
              6.2 SaaS tools added every 30 days.
              <br />
              <span className="text-sm font-light">Source: Invision</span>
            </p>
            <button className="mt-4 bg-white text-[#893cfc] font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition">
              Learn More
            </button>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-gradient-to-br from-[#FF3366] to-[#1A1B4B] p-6 rounded-lg shadow-lg text-white flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl font-bold mb-4">
              85% of business Apps will be SaaS-based by 2025.
              <br />
              <span className="text-sm font-light">Source: Bettercloud</span>
            </p>
            <button className="mt-4 bg-white text-[#FF3366] font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition">
              Learn More
            </button>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-gradient-to-br from-[#1A1B4B] to-[#893cfc] p-6 rounded-lg shadow-lg text-white flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl font-bold mb-4">
              5X Organizations are more susceptible to cyber incidents through 2027
              if they fail to centralize SaaS life cycles.
              <br />
              <span className="text-sm font-light">Source: Gartner</span>
            </p>
            <button className="mt-4 bg-white text-[#1A1B4B] font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
