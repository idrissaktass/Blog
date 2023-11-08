import React from "react";
import { Link } from "react-router-dom";

function RecipeListPage({ listofRecipes }) {
  return (
    <div className="row blogsDisplay">
      {listofRecipes.map((recipe) => (
        <div key={recipe.id} className="col-sm-5 blog">
          <Link to={`/recipes/${recipe.id}`}>
            <img className="blogImg" src="../logo512.png" alt={`Recipe - ${recipe.title}`} />
            <div className="blogContent">
              <h2>{recipe.title}</h2>
              <p>{recipe.text}</p>
              <div className="userName">
                <b>Name: {recipe.name}</b>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeListPage;
