"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WhyUs: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1A1B4B] via-[#893cfc] to-[#FF3366] text-white">
      {/* Animated Background Circles */}
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
        {/* Page Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why <span className="text-[#FF3366]">Forescribe</span>?
        </motion.h1>

        {/* Section: Early-stage Organizations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-8 m-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg border border-white/20">
              <h2 className="text-2xl font-bold mb-4">Budget Forecasting</h2>
              <p className="text-gray-200 mb-4">
                Early-stage organizations often have limited budgets. Forescribe helps
                them manage their SaaS spending efficiently from the beginning,
                preventing overspending and ensuring that every dollar is allocated
                wisely.
              </p>
              <p className="text-gray-200 mb-4">
                <strong>Scalability:</strong> Forescribe&apos;s insights assist in making
                informed decisions about scaling the software stack as the company
                grows.
              </p>
              <p className="text-gray-200 mb-6">
                <strong>Data-Driven Growth:</strong> By leveraging Forescribe&apos;s
                data-driven insights, early-stage organizations can grow sustainably.
              </p>
              <a
                href="#"
                className="bg-[#FF3366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#e12b5a] transition"
              >
                Learn More
              </a>
            </div>
          </motion.div>
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/Images/Designer.jpeg"
              alt="Early-stage Organizations"
              width={500}
              height={500}
              className="rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
            />
          </motion.div>
        </div>

        {/* Section: Small Businesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
           src="/Images/Designer1.jpeg" 
           alt="Small Businesses" 
          width={500} 
         height={500} 
         className="relative p-4 m-4 ml-6 rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"             
         />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-8 m-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Compliance and Reporting</h2>
              <p className="text-gray-200 mb-4">
                Small businesses often operate with tight budgets. Forescribe helps
                them optimize SaaS spending by identifying redundant or underutilized
                software.
              </p>
              <p className="text-gray-200 mb-4">
                <strong>Workflow Efficiency:</strong> Streamline operations and
                improve productivity using Forescribe&apos;s software stack insights.
              </p>
              <p className="text-gray-200 mb-6">
                <strong>Resource Allocation:</strong> Allocate resources effectively to
                invest in tools that provide maximum value.
              </p>
              <a
                href="#"
                className="bg-[#FF3366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#e12b5a] transition"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>

        {/* Section: Large Enterprises */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-8 m-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg border border-white/20">
              <h2 className="text-2xl font-bold mb-4"> Cost Control and Optimization</h2>
              <p className="text-gray-200 mb-4">
                Forescribe is invaluable for large enterprises managing a vast number
                of software subscriptions, potentially saving millions in SaaS
                expenses.
              </p>
              <p className="text-gray-200 mb-4">
                <strong>Operational Efficiency:</strong> Streamline and consolidate
                software tools for improved productivity and reduced complexity.
              </p>
              <p className="text-gray-200 mb-6">
                <strong>Strategic Decision-Making:</strong> Leverage Forescribe&apos;s
                insights to align software investments with business objectives.
              </p>
              <a
                href="#"
                className="bg-[#FF3366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#e12b5a] transition"
              >
                Learn More
              </a>
            </div>
          </motion.div>
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/Images/Designer2.jpeg"
              alt="Large Enterprises"
              width={500}
              height={500}
              className="rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
