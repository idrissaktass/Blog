import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../content.css"

function Movie() {
  const { movieId } = useParams(); // Get the recipe ID from URL parameter
  const [movie, setmovie] = useState(null);


  useEffect(() => {
    const fetchmovie = async () => {
      try {
        const response = await fetch(`http://localhost:3001/movies/${movieId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setmovie(data);
      } catch (error) {
        console.error("Error fetching movie advice details:", error);
      }
    };

    fetchmovie();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row justify-content-center">
      <div className="col-7 details">
        <img src="" alt="" />
        <h2 className="h-details">{movie.title}</h2>
        <p className="movie-sum">{movie.summary}</p>
        <div className="line-icon">
          <span className="line"></span>
            <div className="movie-duration">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"> Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/></svg>
          <div className="movie-pages">
            <span className="movie-span">DURATION </span>
            <span className="movie-p">{movie.duration}</span>
            </div>
            </div>
          <span className="line"></span>
          <div className="movie-duration">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"> Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>          
          <div className="movie-pages">
            <span className="movie-span">DIRECTOR </span>
            <span className="movie-p">{movie.director}</span>
            </div>
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"> Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>          
          <div className="movie-pages">
            <span className="movie-span">DIRECTOR </span>
            <span className="movie-p">{movie.director}</span>
            </div> */}
          <span className="line"></span>
        </div>
        {/* <div className="book-icons">
            <div className="movie-pages">
            <p>DURATION</p>
            <p>{movie.duration}</p>
            </div>
            <div className="movie-pages">
            <p>DIRECTOR</p>
            <p>{movie.director}</p>
            </div>
        </div> */}
        <div className="line-icon">
          <span className="line"></span>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"> Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
          <span className="line"></span>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"> Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"/></svg>        
          <span className="line"></span>
        </div>
        <div className="book-icons">
          <div className="movie-pages">
            <p>SCORE</p>
            <p>{movie.scale}</p>
          </div>
          <div className="movie-pages">
            <p>SUBJECT</p>
            <p>{movie.subject}</p>
          </div>
        </div>
        <div className="line-ingredients">
          <p className="ing-details">POSİTİVES</p>
          <span className="line"></span>
        </div>
        <ul className="ingredients-list">
          {movie.positive.map((positive, index) => (
            <li key={index}>{positive}</li>
          ))}
        </ul>
        <div className="line-ingredients">
          <p className="ing-details">NEGATİVES</p>
          <span className="line"></span>
        </div>
        <ul className="recipe-list">
          {movie.negative.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
        <p className="name-details">User Name: {movie.username}</p>
      </div>
    </div>
  );
}

export default Movie;
