import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">Bloglog</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="http://localhost:3000/">Home<span class="sr-only">(current)</span></a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/healthtips">Health Tips</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/books">Books</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/recipes">Recipes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/stories">Stories</a>
            </li>
          </ul>
        </div>
      </nav>
    )
};

export default Navbar;