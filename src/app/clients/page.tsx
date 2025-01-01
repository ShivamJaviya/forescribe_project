"use client";

import React from "react";
import { motion } from "framer-motion";

type Client = {
  name: string;
  feedback: string;
  designation: string;
  companyLogo: string;
};

const clientsData: Client[] = [
  {
    name: "Juniper Ember",
    feedback:
      "Tangled in SaaS challenges, Forescribe untangled the mess. A centralized dashboard provided real-time spending visibility, usage tracking, and automated policy enforcement.",
    designation: "Finance Director at Headway",
    companyLogo: "/Images/c3.jpg",
  },
  {
    name: "Cordelia Willow",
    feedback:
      "Compliance headaches evaporated with Forescribe's centralized view and automated checks. SaaS compliance management became hassle-free, leaving our legal team significantly happier.",
    designation: "IT Specialist at Hunter",
    companyLogo: "/Images/c1.jpg",
  },
  {
    name: "Aurora Shade",
    feedback:
      "Forescribe unlocked the value of our SaaS investments. Its visibility, insights, and automated recommendations not only saved money but also reduced workload.",
    designation: "IT Analyst at VisualDX",
    companyLogo: "/Images/c2.jpg",
  },
];

const Clients: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1A1B4B] via-[#893cfc] to-[#FF3366] text-white">
      {/* Animated Background Effects */}
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#FF3366] rounded-full filter blur-3xl opacity-30"
        animate={{ x: [0, 50, -50], y: [0, -50, 50] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#893cfc] rounded-full filter blur-3xl opacity-30"
        animate={{ x: [0, -50, 50], y: [0, 50, -50] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      <div className="container mx-auto py-16 px-4 relative z-10">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          See Why They <span className="text-[#FF3366]">Love</span> It
        </motion.h1>

        {/* Client Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientsData.map((client, index) => (
            <motion.div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4 hover:scale-105 transform transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Company Logo */}
              <motion.img
                src={client.companyLogo}
                alt={`${client.name}'s Company Logo`}
                className="w-20 h-20 object-contain"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.4 }}
              />

              {/* Feedback */}
              <p className="text-center text-sm md:text-base italic">
                {client.feedback}
              </p>

              {/* Client Info */}
              <div className="text-center">
                <motion.p
                  className="font-bold"
                  whileHover={{ color: "#FF3366" }}
                  transition={{ duration: 0.4 }}
                >
                  {client.name}
                </motion.p>
                <p className="text-sm text-gray-500">{client.designation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
