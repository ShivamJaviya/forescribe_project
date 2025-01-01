"use client";
import React from "react";
import { HiOutlineXCircle } from "react-icons/hi";
import { motion } from "framer-motion";

type ToastProps = {
  msg?: string;
  closeToast: () => void;
};

const Toast: React.FC<ToastProps> = ({ msg = "Hi there!", closeToast }) => {
  return (
    <div
      className="duration-500 transition-all ease-in-out bg-[#893cfc] 
     justify-between flex items-center p-4 rounded-md"
    >
      <h2>{msg}</h2>
      <button onClick={closeToast}>
        <HiOutlineXCircle className="text-[22px] ml-5 text-white" />
      </button>
    </div>
  );
};

const Careers: React.FC = () => {
  const [showToast, setShowToast] = React.useState<boolean>(true);

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1B4B] to-[#893cfc] text-white">
      <div className="p-8">
        {showToast && <Toast msg="We are hiring! Apply now." closeToast={closeToast} />}

        <motion.h1
          className="text-4xl font-bold mt-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Careers
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-300 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore exciting job opportunities and join our dynamic team.
        </motion.p>

        <div className="mt-8">
          <motion.h2
            className="text-2xl font-semibold text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Current Openings
          </motion.h2>
          <motion.ul
            className="mt-4 space-y-4 mx-auto max-w-2xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {[
              { title: "Frontend Developer", description: "Experience with React and Tailwind CSS. Apply now!" },
              { title: "Backend Engineer", description: "Proficiency in Node.js and database management. Immediate requirement." },
              { title: "UI/UX Designer", description: "Creative designers with experience in Figma and Adobe XD." },
            ].map((job, index) => (
              <motion.li
                key={index}
                className="p-4 border rounded-md shadow-sm bg-white text-black"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-medium">{job.title}</h3>
                <p className="text-gray-600">{job.description}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Form Section */}
        <motion.div
          className="bg-glass bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-8 mt-16 mx-auto max-w-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Apply Now
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#893cfc] focus:outline-none bg-white/20 backdrop-blur-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#893cfc] focus:outline-none bg-white/20 backdrop-blur-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Position
              </label>
              <input
                type="text"
                placeholder="Position you are applying for"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#893cfc] focus:outline-none bg-white/20 backdrop-blur-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="Tell us more about yourself"
                rows={4}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#893cfc] focus:outline-none bg-white/20 backdrop-blur-md"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Upload Resume (PDF)
              </label>
              <input  
                type="file"
                accept=".pdf"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#893cfc] focus:outline-none bg-white/20 backdrop-blur-md"
              />
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

export default Careers;
