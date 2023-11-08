import React, { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../content.css"

function CreateRecipe({ updateRecipes }) {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [text, setText] = useState([]);
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState(""); // Yeni bir state tanımı
  const [textInput, setTextInput] = useState(""); // Yeni bir state tanımı
  const [time, setTime] = useState("");
  const [serving, setServing] = useState("");
  const [course, setCourse] = useState("");


  const handleIngredientsChange = () => {
    if (ingredientInput.trim() !== "") {
      setIngredients((prevIngredients) => [...prevIngredients, ingredientInput]);
      setIngredientInput(""); // Malzeme eklendikten sonra input alanını temizle
    }
  };
  const handleTextChange = () => {
    if (textInput.trim() !== "") {
      setText((prevText) => [...prevText, textInput]);
      setTextInput(""); // Malzeme eklendikten sonra input alanını temizle
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = { title, summary, text, ingredients, name, time, serving, course };
    
    try {
      const response = await axios.post("http://localhost:3001/createRecipe", newRecipe);
      console.log("Recipe created:", response.data);
      // Clear input fields
      setTitle("");
      setSummary("");
      setText([]);
      setName("");
      setIngredients([]);
      setTime("");
      setServing("");
      setCourse("");
      
      // Update recipes in parent component
      updateRecipes();
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  return (
    <div className="form-container">
        <Form className="row form" onSubmit={handleSubmit}>
          <div className="col-sm-4 mx-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Summary:</Form.Label>
                <Form.Control className="form-sum" value={summary} onChange={(e) => setSummary(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>
          </div>
          <div className="col-sm-4 mx-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ingredients:</Form.Label>
              <div className="ingredient-part">
                <div className="ingredient-input">
                  <Form.Control
                    className="form-text"
                    type="text"
                    value={ingredientInput}
                    onChange={(e) => setIngredientInput(e.target.value)}
                    placeholder="Add ingredient..."
                  />
                  <div className="btn-add">
                    <button className="add-btn" variant="secondary" onClick={handleIngredientsChange}>
                      Add
                    </button>
                  </div>
                </div>

              </div>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Recipe:</Form.Label>
              <div className="recipe-input">
                <Form.Control
                  className="form-text"
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Add recipe..."
                />
                <div className="btn-add">
                  <button className="add-btn" variant="secondary" onClick={handleTextChange}>
                    Add
                  </button>
                </div>
              </div>
            </Form.Group>
          </div>
          <div className="col-sm-2 mx-3">
          <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Total Time:</Form.Label>
                <Form.Control className="form-sum" value={time} onChange={(e) => setTime(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Servings:</Form.Label>
                <Form.Control className="form-sum" value={serving} onChange={(e) => setServing(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Course:</Form.Label>
                <Form.Control className="form-sum" value={course} onChange={(e) => setCourse(e.target.value)} required />
            </Form.Group>
          </div>
            <div className="div-submit">
              <button className="btn-submit" type="submit">
                  Submit
              </button>
            </div>
        </Form>
        <div className="input-lists">
          <div className="ingredient-list">
            <b className="list-header">Current Ingredients:</b>
              {ingredients.map((ingredient, index) => (
                <div key={index} className="ingredient-item">
                  <ul>
                    <li>
                      {ingredient}
                    </li>
                  </ul>   
                </div>
              ))}
          </div>
          <div className="recipe-list">
           <b className="list-header">Current Recipe:</b>
            {text.map((content, index) => (
              <div key={index} className="text-item">
                <ul>
                  <li>
                    {content}
                  </li>
                </ul>   
              </div>
            ))}
          </div>
        </div>
        
    </div>
  );
}

export default CreateRecipe;
