import React, { useEffect, useRef, useState } from "react";

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  // Fetch items from API
  const fetchItems = async (pageNum) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
    );
    const data = await res.json();
    setItems((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    fetchItems(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 } // fully visible
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, []);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ padding: "10px", border: "1px solid #ddd" }}>
            {item.title}
          </li>
        ))}
      </ul>
      <div ref={loaderRef} style={{ height: "50px", background: "#333" }}>
        Loading more...
      </div>
    </div>
  );
};

export default InfiniteScroll;
