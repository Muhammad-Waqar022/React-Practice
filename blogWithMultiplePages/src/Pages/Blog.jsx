import React from "react";
import posts from "../Data/Posts.json";
import PostCard from "../Components/PostCard";

const Blog = () => {
  return (
    <div>
      {posts.map((posts) => (
        <PostCard posts={posts}/>
      ))}
    </div>
  );
};

export default Blog;
