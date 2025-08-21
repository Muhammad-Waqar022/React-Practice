import React from "react";

const BlogCard = () => {
  const posts = [
    {
      id: 1,
      title: "React Basics",
      author: "Waqar",
      tags: ["react", "javascript", "frontend"],
    },
    {
      id: 2,
      title: "Node.js API Development",
      author: "Ahmad",
      tags: ["nodejs", "backend", "api"],
    },
    {
      id: 3,
      title: "Tailwind CSS Guide",
      author: "Arslan",
      tags: ["css", "tailwind", "design"],
    },
    {
      id: 4,
      title: "CSS Guide",
      author: "Ammar",
      tags: ["css", "tailwind", "design"],
    },
    {
      id: 5,
      title: "Javascript Guide",
      author: "Bilal",
      tags: ["css", "tailwind", "design"],
    },
  ];

  const cards = posts.map((item) => (
    <div
      key={item.id}
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h1>{item.title}</h1>
      <p>Author: {item.author}</p>
      <ul>
        {item.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <>
      {cards}
    </>
  );
};

export default BlogCard;
