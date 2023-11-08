import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import CreateBook from './CreateBook';
import Books from './Books';

function Advices() {
  const navigate = useNavigate();

  const navigateToBooks = () => {
    navigate('/books');
  };
  const navigateToMovies = () => {
    navigate('/movies');
  };
  const navigateToStories = () => {
    navigate('/series');
  };
  const navigateToDocumenteries = () => {
    navigate('/documenteries');
  };

  const [listofBooks, setListofBooks] = useState([]);
  const [listofMovies, setListofMovies] = useState([]); // Add listofRecipes state
  const [listofSeries, setListofSeries] = useState([]);
  const [listofDocumenteries, setListofDocumenteries] = useState([]);


  const updateBooks = async () => {
    try {
      const response = await fetch("http://localhost:3001/books");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setListofBooks(data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

//   const updateSeries = async () => {
//     try {
//       const response = await fetch("http://localhost:3001/series");
//       if (!response.ok) {
//         throw new Error("Network response was not ok.");
//       }
//       const data = await response.json();
//       setListofSeries(data); // Update the state with the fetched data
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const updateMovies = async () => {
//     try {
//       const response = await fetch("http://localhost:3001/movies");
//       if (!response.ok) {
//         throw new Error("Network response was not ok.");
//       }
//       const data = await response.json();
//       setListofMovies(data); // Update the state with the fetched data
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   const updateDocumenteries = async () => {
//     try {
//       const response = await fetch("http://localhost:3001/documenteries");
//       if (!response.ok) {
//         throw new Error("Network response was not ok.");
//       }
//       const data = await response.json();
//       setListofDocumenteries(data); // Update the state with the fetched data
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:3001/books");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setListofBooks(data); // Update the state with the fetched data
        console.log("Fetched books:", data); // Add this line

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log("useEffect hook is running...");
    // const fetchMovies = async () => {
    //   try {
    //     const response = await fetch("http://localhost:3001/movies");
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok.");
    //     }
    //     const data = await response.json();
    //     setListofMovies(data); // Update the state with the fetched data
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };
    // const fetchSeries = async () => {
    //   try {
    //     const response = await fetch("http://localhost:3001/series");
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok.");
    //     }
    //     const data = await response.json();
    //     setListofSeries(data); // Update the state with the fetched data
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };
    // const fetchSDocumenteries = async () => {
    //   try {
    //     const response = await fetch("http://localhost:3001/documenteries");
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok.");
    //     }
    //     const data = await response.json();
    //     setListofDocumenteries(data); // Update the state with the fetched data
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    // fetchSeries();
    fetchBooks();
    // fetchMovies();
    // fetchSDocumenteries();
  }, []); 

  return (
      <div className="App">
        <div className="container blogs">
        <Routes>
        <Route
        path="/createBook"
        element={<CreateBook updateBooks={updateBooks} />}
        />
        <Route
            path="/books"
            element={
              <div>
                {/* Show all the recipes */}
                <Books listofBooks={listofBooks}  />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div>
                <div className="row blogsDisplay">
                  {/* Show only the first 3 recipes */}
                  {listofBooks.slice(0, 3).map((book) => (
                    <div
                      key={book.id}
                      className={`col-sm-${listofBooks.length < 3 ? '5' : '3'} blog`}
                    >
                      <div className='blogImg'>
                        <img className = "blog-image" src='../ball.png' alt='Book' />
                      </div>
                      <div className='blogContent'>
                        <b>{book.title}</b>
                      </div>
                    </div>
                  ))}
                  <button  type="button" className="btn btn-outline-success" onClick={navigateToBooks}>All Books</button>
                  <Routes>
                    <Route path="/advices" element={<Advices/>} />
                  </Routes>
                </div>
              </div>
              
            }
          />
        </Routes>
        
      </div>
    </div>
  );
}

export default Advices;
