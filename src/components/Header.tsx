"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";

// const USER_IMAGE: string =
//   "https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg";



const Header: React.FC = () => {
  return (
    <div
      className="flex justify-between items-center px-6 py-4 shadow-md bg-white rounded-full
      border border-gray-300"
    >
      {/* Logo */}
      <Link href="/" passHref>
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/Images/forescribe_logo.jpg"
            width={40}
            height={40}
            alt="Forescribe Logo"
            className="rounded-full"
          />
          <span
            className="text-xl font-semibold italic text-[#4B0082]
            hover:text-[#893cfc] transition: opacity 0.5s ease-in-out"
          >
            Forescribe
          </span>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 items-center">
        {[
          { name: "Home", path: "/" },
          { name: "Why us", path: "/why-us" },
          { name: "Clients", path: "/clients" },
          { name: "Careers", path: "/careers" },
          { name: "Contact Us", path: "/contactus" },
          { name: "Blog", path: "/blog" },
        ].map((link, index) => (
          <Link key={index} href={link.path} passHref>
            <button
              className="text-gray-700 font-medium hover:text-[#893cfc] transition duration-300"
            >
              {link.name}
            </button>
          </Link>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <Link href="/login">
        <button
          className="bg-[#4B0082] text-white px-4 py-2 rounded-full font-medium text-sm
          hover:scale-105 transition transform duration-300"
          // Uncomment the line below to enable NextAuth signIn
          // onClick={() => signIn()}
        >
          <span className="hidden sm:block">SIGN IN</span>
          <HiArrowLeftOnRectangle className="sm:hidden text-lg" />
        </button>
        </Link>

      </div>
    </div>
  );
};

export default Header;
