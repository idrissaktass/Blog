import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../content.css"

function Story() {
  const { storyId } = useParams(); // Get the recipe ID from URL parameter
  const [story, setStory] = useState(null);


  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch(`http://localhost:3001/stories/${storyId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setStory(data);
      } catch (error) {
        console.error("Error fetching story details:", error);
      }
    };

    fetchStory();
  }, [storyId]);

  if (!story) {
    return <div>Loading...</div>;
  }

  const textLines = story.text.split('\n');

  return (
    <div className="row justify-content-center detail-container">
      <div className="story-text col-8">
        <h2 className="story-details">{story.title}</h2>
        <div className="row story-summary">
          <p className="text-details">{story.summary}</p>
        </div>
        <div className="col">
        {textLines.map((line, index) => {
            if (line.startsWith('#')) {
              // Render the line as a heading if it starts with '# '
              return <h5 key={index}>{line.substring(1)} </h5>;
            } else {
              // Render other lines as regular paragraphs
              return <p key={index} style={{ whiteSpace: 'pre-line' }}>{line}</p>;
            }
          })}
          <p className="name-details">Name: {story.name}</p>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="col-7 details">
  //     <h2 className="h-details">{story.title}</h2>
  //     <p className="text-details">{story.summary}</p>
  //     <p>{story.text}</p>
  //     <p className="name-details">Name: {story.name}</p>
  //   </div>
  // );
}

export default Story;
