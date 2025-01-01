"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1B4B] to-[#893cfc] text-white">
      <div className="container mx-auto py-16 px-4">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold">Get the Help You Need</h1>
          <p className="mt-4 text-lg text-gray-300">
            Connect with us via phone, chat, email, or by filling out the form below.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 md:w-2/3 lg:w-1/2 mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Tell us what's happening
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#893cfc] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#893cfc] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#893cfc] focus:outline-none"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-[#1A1B4B] hover:bg-[#893cfc] text-white font-bold py-3 px-6 rounded-md transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
