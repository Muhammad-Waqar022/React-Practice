import React, { useEffect, useState } from 'react'

const MovieList = ({ query, setMovies, movies }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=208426f2`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.Search); 
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [query, setMovies]);

return (
  <div>
    {loading && <p>Loading...</p>}
    {!loading && !query && <p>Type something to search for movies 🎬</p>}
    {!loading && movies.length === 0 && query && <p>No results found.</p>}
    <ul>
      {movies.map(movie => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} width="100" />
          <p>{movie.Title} ({movie.Year})</p>
        </li>
      ))}
    </ul>
  </div>
);

}

export default MovieList
