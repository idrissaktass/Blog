import React, { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../content.css"

function CreateBook ({ updateBooks }) {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [username, setUsername] = useState("");
  const [authorname, setAuthorName] = useState("");
  const [positive, setPositive] = useState([]);
  const [negative, setNegative] = useState([]);
  const [positiveInput, setPositiveInput] = useState(""); // Yeni bir state tanımı
  const [negativeInput, setNegativeInput] = useState(""); // Yeni bir state tanımı
  const [scale, setScale] = useState("");
  const [pagenumber, setPageNumber] = useState("");
  const [subject, setSubject] = useState("");


  const handlePositiveChange = () => {
    if (positiveInput.trim() !== "") {
      setPositive((prevPositive) => [...prevPositive, positiveInput]);
      setPositiveInput(""); // Malzeme eklendikten sonra input alanını temizle
    }
  };
  const handleNegativeChange = () => {
    if (negativeInput.trim() !== "") {
      setNegative((prevNegative) => [...prevNegative, negativeInput]);
      setNegativeInput(""); // Malzeme eklendikten sonra input alanını temizle
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = { title, summary, positive, negative, username, authorname, pagenumber, scale, subject };
    
    try {
      const response = await axios.post("http://localhost:3001/createBook", newBook);
      console.log("Book advice created:", response.data);
      // Clear input fields
      setTitle("");
      setSummary("");
      setPositive([]);
      setUsername("");
      setAuthorName("");
      setNegative([]);
      setPageNumber("");
      setScale("");
      setSubject("");
      
      // Update recipes in parent component
      updateBooks();
    } catch (error) {
      console.error("Error creating book advice:", error);
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
                <Form.Label>Author Name:</Form.Label>
                <Form.Control value={authorname} onChange={(e) => setAuthorName(e.target.value)} required />
            </Form.Group>
          </div>
          <div className="col-sm-4 mx-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Positive Sides:</Form.Label>
              <div className="ingredient-part">
                <div className="ingredient-input">
                  <Form.Control
                    className="form-text"
                    type="text"
                    value={positiveInput}
                    onChange={(e) => setPositiveInput(e.target.value)}
                    placeholder="Add positive side..."
                  />
                  <div className="btn-add">
                    <button className="add-btn" variant="secondary" onClick={handlePositiveChange}>
                      Add
                    </button>
                  </div>
                </div>
              </div>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Negative Sides:</Form.Label>
              <div className="recipe-input">
                <Form.Control
                  className="form-text"
                  type="text"
                  value={negativeInput}
                  onChange={(e) => setNegativeInput(e.target.value)}
                  placeholder="Add negative sides..."
                />
                <div className="btn-add">
                  <button className="add-btn" variant="secondary" onClick={handleNegativeChange}>
                    Add
                  </button>
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username:</Form.Label>
                <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} required />
            </Form.Group>
          </div>
          <div className="col-sm-2 mx-3">
          <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Subject:</Form.Label>
                <Form.Control className="form-sum" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Number of Pages:</Form.Label>
                <Form.Control className="form-sum" value={pagenumber} onChange={(e) => setPageNumber(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Score:</Form.Label>
                <Form.Control className="form-sum" value={scale} onChange={(e) => setScale(e.target.value)} required />
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
            <b className="list-header">Current Positive Sides:</b>
              {positive.map((side, index) => (
                <div key={index} className="ingredient-item">
                  <ul>
                    <li>
                      {side}
                    </li>
                  </ul>   
                </div>
              ))}
          </div>
          <div className="recipe-list">
           <b className="list-header">Current Recipe:</b>
            {negative.map((content, index) => (
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

export default CreateBook;
