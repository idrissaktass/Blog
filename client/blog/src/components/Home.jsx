import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import Navbar from './Navbar';

function Home1() {
  return (
      <div className="App">
      <Navbar />
        <div className="row blogsDisplay">
        <button onClick={navigateHome}>Home</button>
        <hr />
        <button onClick={navigateToContacts}>Recipes</button>
        <Routes>
        <Route
            path="/recipes"
            element={
              <div>
                {/* Only the Recipe component is included in the Recipes layout */}
                <Routes>
                  <Route path="/" element={<Recipe />} />
                </Routes>
              </div>
            }
          />   
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <div className="row blogsDisplay">
                  <button onClick={navigateHome}>Home</button>
                  <hr />
                  <button onClick={navigateToContacts}>Recipes</button>
                  <Routes>
                    <Route path="/" element={<Home/>} />
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

export default Home1;
