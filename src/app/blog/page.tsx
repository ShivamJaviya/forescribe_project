"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type BlogPost = {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  description: string;
  image: string;
  views: number;
  likes: number;
};

const blogPosts: BlogPost[] = [
     {
          id: 1 ,
          title: "How Forescribe Simplifies Compliance",
          author: "John Doe",
          date: "2 weeks ago",
          category: "Compliance",
          description:
            "Learn how Forescribe's centralized compliance management saves time and ensures peace of mind.",
          image: "/Images/a1.avif",
          views: 36,
          likes: 8,
        },
  {
    id: 2,
    title: "Top SaaS Trends in 2024",
    author: "Sophia Ray",
    date: "1 week ago",
    category: "Technology",
    description:
      "Discover the top trends shaping the SaaS industry in 2024 and how to leverage them for success.",
    image: "/Images/saas.png",
    views: 58,
    likes: 25,
  },
  {
     id: 3,
     title: "Forescribe 2024 Wrapped: Year in Review",
     author: "Vinayak Gupta",
     date: "2 days ago",
     category: "Product",
     description:
       "What a Year! Together, We Made 2024 Transformative. Check out the highlights of the year!",
     image: "/Images/WhatsApp Image 2024-12-31 at 11.22.46 PM.jpg",
     views: 42,
     likes: 12,
   }
];

const Blog: React.FC = () => {
  const [posts, setPosts] = useState(blogPosts);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  // Load liked posts from localStorage on component mount
  useEffect(() => {
    const storedLikes = localStorage.getItem("likedPosts");
    if (storedLikes) {
      setLikedPosts(JSON.parse(storedLikes));
    }
  }, []);

  const handleLike = (postId: number) => {
    // Check if the post has already been liked
    if (likedPosts.includes(postId)) return;

    // Update likes and store in localStorage
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);

    const updatedLikedPosts = [...likedPosts, postId];
    setLikedPosts(updatedLikedPosts);
    localStorage.setItem("likedPosts", JSON.stringify(updatedLikedPosts));
  };

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
          Best Updates of <span className="text-[#FF3366]">2025</span>
        </motion.h1>

        {/* Blog Posts Full-Width Layout */}
        <div className="grid grid-cols-1 gap-12">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Blog Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full lg:w-1/3 object-cover h-64 lg:h-auto"
              />

              {/* Blog Content */}
              <div className="p-6 flex flex-col justify-between lg:w-2/3">
                {/* Blog Title and Description */}
                <div>
                  <p className="text-sm text-gray-500">{post.category}</p>
                  <h2 className="text-xl font-bold mt-2">{post.title}</h2>
                  <p className="text-sm mt-4">{post.description}</p>
                </div>

                {/* Footer with Author, Views, and Likes */}
                <div className="flex justify-between items-center text-sm mt-6 text-gray-500">
                  <div>
                    <p>By {post.author}</p>
                    <p>{post.date}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <span>👁️</span>
                      <span>{post.views} views</span>
                    </div>
                    <div
                      className={`flex items-center space-x-1 cursor-pointer ${
                        likedPosts.includes(post.id) ? "text-red-500" : ""
                      }`}
                      onClick={() => handleLike(post.id)}
                    >
                      <span>❤️</span>
                      <span>{post.likes} likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
