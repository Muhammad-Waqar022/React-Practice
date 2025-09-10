import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";
const Movie = () => {
    const [data,setData]=useState([])
  const API =`https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1`;


  const getMovieData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.Search)
    } catch (err) {
      console.log("Error Message: ",err.message);
      console.log("Error Message: ",err.response.status);
      console.log("Error Message: ",err.response.data);
    }
  };
  useEffect(() => {
    getMovieData();
  }, []);

  return <div>
    <ul className="container grid grid-four--cols">
        {data.map((curr) => (
          <Card key={curr.imdbID} movieData={curr} />
        ))}
    </ul>
  </div>;
};

export default Movie;
