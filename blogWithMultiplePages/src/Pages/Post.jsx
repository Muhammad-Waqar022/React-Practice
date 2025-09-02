import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import posts from "../Data/Posts.json";

const Post = () => {
    const {id}=useParams();
    const post = posts.find((p) => p.id.toString() === id);
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate(-1)
    }
  return (
    <>
    <div>
      <h1 className="font-bold text-2xl">{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Tags: {post.tags}</p>
      <button onClick={handleClick}>Back</button>
    </div>
    </>
  )
}

export default Post