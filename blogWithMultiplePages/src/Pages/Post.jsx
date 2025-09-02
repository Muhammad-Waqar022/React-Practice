import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import posts from "../Data/Posts.json";

const Post = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md mt-8">
    <img className="w-full h-64 md:h-96 object-cover rounded-t-xl" src={post.poster} alt={post.title} />
      <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4"> <span className="font-bold text-base">Date:</span> {post.date}</p>

      <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>

      <p className="text-gray-600 mb-2">
       <span className="font-bold text-xl">Author:</span> <span className="font-medium">{post.author}</span>
      </p>

      <div className="mb-6">
        <span className="font-semibold text-gray-800">Tags:</span>
        <div className="flex flex-wrap mt-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        ← Back
      </button>
    </div>
  );
};

export default Post;
