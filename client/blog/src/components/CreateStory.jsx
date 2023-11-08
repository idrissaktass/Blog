import React, { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";

function CreateStory({ updateStories }) {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [text, setText] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStory = { title, summary, text, name };
  
    try {
      const response = await axios.post("http://localhost:3001/createstory", newStory)
      console.log("Story created:", response.data);
      
      // Giriş alanlarını temizleyin
      setTitle("");
      setSummary("");
      setText("");
      setName("");

      // Hikayeleri güncelleyin
      updateStories();
    } catch (error) {
      console.error("Error creating story:", error);
    }
  };

  return (
    <div className="form-container">
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Summary:</Form.Label>
                <textarea className="form-control"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)} required 
                  rows={2} // Buradaki değeri istediğiniz kadar satır sayısına göre ayarlayabilirsiniz
                  cols={30} // İsteğe bağlı, sütun sayısını belirler
                />            
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Story (Put "#" on starting the header for heading):</Form.Label>
                 <textarea className="form-control"
                  value={text}
                  onChange={(e) => setText(e.target.value)} required 
                  rows={4} // Buradaki değeri istediğiniz kadar satır sayısına göre ayarlayabilirsiniz
                  cols={30} // İsteğe bağlı, sütun sayısını belirler
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>

    // <div>
    //   <h2>Create Recipe</h2>
    //   <form onSubmit={handleSubmit}>
    //     <label>Title:</label>
    //     <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
    //     <label>Summary:</label>
    //     <textarea value={summary} onChange={(e) => setSummary(e.target.value)} required />
    //     <label>Text:</label>
    //     <textarea value={text} onChange={(e) => setText(e.target.value)} required />
    //     <label>Name:</label>
    //     <textarea value={name} onChange={(e) => setName(e.target.value)} required />
    //     <button type="submit">Create Recipe</button>
    //   </form>
    // </div>
  );
}

export default CreateStory;
