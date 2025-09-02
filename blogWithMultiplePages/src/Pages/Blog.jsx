import React from "react";
import posts from "../Data/Posts.json";
import PostCard from "../Components/PostCard";

const Blog = () => {
  return (
    <div className="m-9">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((posts) => (
        <PostCard posts={posts} />
      ))}
      </div>
    </div>
  );
};

export default Blog;
