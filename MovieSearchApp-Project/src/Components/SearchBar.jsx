import React from "react";

const SearchBar = ({ query, setQuery }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for a movie..."
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
