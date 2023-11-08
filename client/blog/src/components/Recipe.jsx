import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../content.css";
import Depo from "./Depo.png"
function Recipe() {
  const { recipeId } = useParams(); // Get the recipe ID from URL parameter
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:3001/recipes/${recipeId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row justify-content-center">
      <div className="col-7 details">
        <img src="" alt="" />
        <h2 className="h-details">{recipe.title}</h2>
        <p>{recipe.summary}</p>
        <div className="line-icon">
          <span className="line"></span>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"> Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
          <span className="line"></span>
        </div>
        <div className="recipe-time">
          <p>TOTAL TIME</p>
          <p>{recipe.time}</p>
        </div>
        <div className="line-icon">
          <span className="line"></span>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"> Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg>          <span className="line"></span>
        </div>
        <div className="recipe-serving">
          <div className="serving">
            <p>SERVINGS</p>
            <p>{recipe.serving}</p>
          </div>
          <div className="serving">
            <p>COURSE</p>
            <p>{recipe.course}</p>
          </div>
        </div>
        <div className="line-ingredients">
          <p className="ing-details">INGREDIENTS</p>
          <span className="line"></span>
        </div>
        <ul className="ingredients-list">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className="line-ingredients">
          <p className="ing-details">RECIPE</p>
          <span className="line"></span>
        </div>
        <ul className="recipe-list">
          {recipe.text.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
        <p className="name-details">Name: {recipe.name}</p>
      </div>
    </div>
  );
}

export default Recipe;
