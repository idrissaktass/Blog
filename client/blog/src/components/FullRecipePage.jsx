import React from "react";
import { useParams } from "react-router-dom";

const FullRecipePage = ({ listofRecipes }) => {
  const { id } = useParams();
  const selectedRecipe = listofRecipes.find((recipe) => recipe.id === Number(id));

  if (!selectedRecipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{selectedRecipe.title}</h2>
      <p>{selectedRecipe.text}</p>
      <div className="userName">
        <b>Name: {selectedRecipe.name}</b>
      </div>
    </div>
  );
};

export default FullRecipePage;
