import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ posts }) => {
  return (
    <div>
      <div key={posts.id}>
        <h2 className="font-bold">{posts.title}</h2>
        <p>{posts.excerpt}</p>
        <Link to={`/blog/${posts.id}`} className="text-blue-500 underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
