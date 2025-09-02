import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ posts }) => {
  return (
    <div
      key={posts.id}
      className="border border-gray-300 rounded-md mb-6 bg-gray-100 overflow-hidden shadow-lg"
    >
      <div className="w-full h-65 bg-gray-300">
        {posts.poster ? (
          <img
            src={posts.poster}
            alt={posts.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
            No Image
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{posts.title}</h2>
        <p className="text-sm text-gray-700 mb-3">{posts.excerpt}</p>
        <Link
          to={`/blog/${posts.id}`}
          className="text-blue-500 text-sm underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
