import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import depo from "./Depo.png"


function Stories () {
  const navigate = useNavigate();

  const navigateToPostStory = () => {
    navigate('/createstory');
  };
  const navigateToStory = (storyId) => {
    navigate(`/story/${storyId}`); // Use the dynamic URL parameter
  }

    const [listofStories, setListofStories] = useState([]);


    useEffect(() => {
      
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:3001/stories");
          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }
          const data = await response.json();
          setListofStories(data); // Update the state with the fetched data
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      console.log("useEffect hook is running11...");
    
      fetchData();
    }, []); 

    return (
      <div className="container">
        <div className="btn-post">
          <button type="button" className="btn btn-outline-success" onClick={navigateToPostStory}>Post a story</button>
        </div>


        <div className = "row blogsDisplay">
          {listofStories.map((story) => {
            return (
                <div className={`col-sm-${listofStories.length < 3 ? '5' : '3'} story-blog`} onClick={() => navigateToStory(story._id)}>
                  <div className="blogImg">
                    <img className ="blog-image" src={depo}></img>
                  </div>
                  <div className='storyContent'>
                    <b>{story.title} </b>
                    {/* <p>{story.summary.length > 100 ? `${story.summary.slice(0, 100)}...` : story.summary}</p>
                    <div className='userName'>
                      <b>Name: {story.name} </b>
                    </div> */}
                    <div className="forbtn">
                      {/* <button
                        type="button"
                        className="btn-go"
                        onClick={() => navigateToStory(story._id)}
                      >
                        Full Story
                      </button>     */}
                    </div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>

    )
};

export default Stories;


