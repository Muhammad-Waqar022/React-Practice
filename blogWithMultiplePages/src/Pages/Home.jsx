import React from "react";
import { Link } from "react-router-dom";
import posts from "../Data/Posts.json"; // assuming you have a JSON with all posts

const Home = () => {
  // Select 3 featured posts (first 3 for example)
  const featuredPosts = posts.slice(0, 3);

  return (
    <>
      <div className="p-10 text-center max-w-5xl mx-auto m-4">
        {/* Welcome Section */}
        <h1 className="text-5xl font-extrabold mb-6 text-gray-800">
          Welcome to <span className="text-blue-600">My Blog</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          This is a personal space where I share{" "}
          <span className="font-medium">thoughts</span>,
          <span className="font-medium"> tutorials</span>, and{" "}
          <span className="font-medium">stories</span>
          about web development, coding, and life experiences.
        </p>

        {/* Call to Action */}
        <Link
          to="/blog"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transform transition duration-300 inline-block"
        >
          Explore Blog Posts
        </Link>

        {/* Featured Posts Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-left">Featured Posts</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="border border-gray-300 rounded-md overflow-hidden shadow-sm bg-white"
              >
                <img
                  src={post.poster}
                  alt={post.title}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-700 text-sm mb-3 line-clamp-3">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-500 text-sm underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-3 text-left">What You’ll Find Here: </h2>
          <ul className="text-gray-700 space-y-2 text-left">
            <li>👉 Practical guides for living sustainably & protecting the planet</li>
            <li>👉 Insights on mental health, happiness, sleep & personal growth</li>
            <li>👉 Tips for building financial freedom, careers & entrepreneurship</li>
            <li>👉 Future-focused topics like AI, VR, smart homes & space tourism</li>
            <li>👉 The art of communication, storytelling & self-improvement</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
