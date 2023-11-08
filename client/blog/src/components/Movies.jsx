import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../content.css"
import martini from "./martini.png"

function Movies ({onDelete }) {
  const navigate = useNavigate();

  const navigateToPostMovie = () => {
    navigate('/createMovie');
  };

  const navigateToMovie = (movieId) => {
    navigate(`/movies/${movieId}`); // Use the dynamic URL parameter
  }

  const [listofMovies, setListofMovies] = useState([]);
  
  useEffect(() => {
    const fetchmovies = async () => {
      try {
        const response = await fetch("http://localhost:3001/movies");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setListofMovies(data);
        console.log("Fetched data:", data); // Add this line to check the data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    console.log("useEffect hook is running...");
    fetchmovies();
  }, []);

 // ... (diğer import ve bileşen tanımlamaları)

return (
  <div className="container">
    <div className="btn-post">
      <button type="button" className="btn btn-outline-success" onClick={navigateToPostMovie}>Post a movie</button>
    </div>
    <div className="row blogsDisplay">
    {listofMovies.map((movie) => (
      <div className={`col-sm-${listofMovies.length < 3 ? '5' : '3'} blog`} key={movie.id} onClick={() => navigateToMovie(movie._id)}>
        <div className="blogImg">
          <img className = "blog-image" src={martini}></img>
        </div>
        <div className='blogContent'>
          <b>{movie.title}</b>
          {/* Kırpılmış summary */}
          {/* <p>{recipe.summary.length > 100 ? `${recipe.summary.slice(0, 100)}...` : recipe.summary}</p>
          <div className='userName'>
            <b>Name: {recipe.name}</b>
          </div> */}
          <div className="forbtn">
            <button className="delete-btn" onClick={() => onDelete(movie._id)}>
              {/* ... */}
            </button>
            {/* <button
              type="button"
              className="btn-go"
              onClick={() => navigateToRecipe(recipe._id)}
            >
              Full Recipe
            </button> */}
          </div>
        </div>
      </div>
    ))}
    </div>
  </div>
);
              
}

export default Movies;
