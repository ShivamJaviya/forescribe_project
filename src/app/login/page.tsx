"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const LoginPage = () => {
  const cardData = [
    { title: "Flatfile", subtitle: "Project Management", bgImage: "/Images/p1.jpeg" },
    { title: "Notion", subtitle: "Project Management", bgImage: "/Images/p2.jpeg" },
    { title: "LinkedIn", subtitle: "Project Management", bgImage: "/Images/p3.jpeg" },
    { title: "Canva", subtitle: "Project Management", bgImage: "/Images/p4.jpeg" },
    { title: "Name Cheap", subtitle: "Project Management", bgImage: "/Images/p5.jpeg" },
    { title: "Skype", subtitle: "Project Management", bgImage: "/Images/p6.jpeg" },
    { title: "AWS", subtitle: "Project Management", bgImage: "/Images/p7.jpeg" },
    { title: "Flatfile", subtitle: "Project Management", bgImage: "/Images/p8.jpeg" },
    { title: "Notion", subtitle: "Project Management", bgImage: "/Images/p9.jpeg" },
    { title: "LinkedIn", subtitle: "Project Management", bgImage: "/Images/p10.jpeg" },
    { title: "Canva", subtitle: "Project Management", bgImage: "/Images/p11.jpeg" },
    { title: "Name Cheap", subtitle: "Project Management", bgImage: "/Images/p12.jpeg" },
    { title: "Skype", subtitle: "Project Management", bgImage: "/Images/p13.jpeg" },
    { title: "AWS", subtitle: "Project Management", bgImage: "/Images/p14.jpeg" },
  ];

  const slidingAnimation = {
    initial: { x: 0 },
    animate: {
      x: [-100, 0], 
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  const slidingAnimationReverse = {
    initial: { x: 0 },
    animate: {
      x: [0, -100],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1B1B3A] to-[#8b4ae6] flex items-center justify-center overflow-hidden">
      {/* Background Cards */}
      <div className="absolute w-full h-full p-7 opacity-30">
        <motion.div
          className="grid grid-cols-7 gap-3"
          style={{ width: "max-content" }}
          {...slidingAnimation}
        >
          {cardData.slice(0, 7).map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center rounded-xl shadow-lg text-center"
              style={{
                backgroundImage: `url(${card.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "250px",
                height: "350px",
              }}
            />
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-7 gap-3 mt-3"
          style={{ width: "max-content" }}
          {...slidingAnimationReverse}
        >
          {cardData.slice(7).map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center rounded-xl shadow-lg text-center"
              style={{
                backgroundImage: `url(${card.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "250px",
                height: "350px",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      {/* Login Modal with Glass Effect */}
      <motion.div
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl p-8 max-w-md w-full z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-2xl font-bold text-center text-gray-100 mb-4">
          Welcome to Forescribe
        </h1>
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="flex items-center justify-center bg-[#4285F4] text-white font-medium py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <span className="mr-2">G</span> Continue with Google
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center bg-gray-800 text-white font-medium py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <span className="mr-2">M</span> Continue with Microsoft
          </Link>
        </div>
        <p className="text-sm text-gray-300 text-center mt-4">
          By clicking Continue, you agree to our{" "}
          <Link href="/terms" className="text-blue-400 hover:underline">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-blue-400 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-4">
        <p className="text-sm text-gray-400">
          {" "}
          <a href="mailto:support@forescribe.com" className="underline">
            support@forescribe.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
