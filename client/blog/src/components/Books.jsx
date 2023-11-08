import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../content.css"
import martini from "./martini.png"

function Books ({onDelete }) {
  const navigate = useNavigate();

  const navigateToPostBook = () => {
    navigate('/createBook');
  };

  const navigateToBook = (bookId) => {
    navigate(`/books/${bookId}`); // Use the dynamic URL parameter
  }

  const [listofBooks, setListofBooks] = useState([]);
  
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:3001/books");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setListofBooks(data);
        console.log("Fetched data:", data); // Add this line to check the data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    console.log("useEffect hook is running...");
    fetchBooks();
  }, []);

 // ... (diğer import ve bileşen tanımlamaları)

return (
  <div className="container">
    <div className="btn-post">
      <button type="button" className="btn btn-outline-success" onClick={navigateToPostBook}>Post a book</button>
    </div>
    <div className="row blogsDisplay">
    {listofBooks.map((book) => (
      <div className={`col-sm-${listofBooks.length < 3 ? '5' : '3'} blog`} key={book.id} onClick={() => navigateToBook(book._id)}>
        <div className="blogImg">
          <img className = "blog-image" src={martini}></img>
        </div>
        <div className='blogContent'>
          <b>{book.title}</b>
          {/* Kırpılmış summary */}
          {/* <p>{recipe.summary.length > 100 ? `${recipe.summary.slice(0, 100)}...` : recipe.summary}</p>
          <div className='userName'>
            <b>Name: {recipe.name}</b>
          </div> */}
          <div className="forbtn">
            <button className="delete-btn" onClick={() => onDelete(book._id)}>
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

export default Books;
