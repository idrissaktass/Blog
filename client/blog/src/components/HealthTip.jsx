import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../content.css"

function HealthTip() {
  const { healthtipId } = useParams(); // Get the recipe ID from URL parameter
  const [healthtip, setHealthTip] = useState(null);


  useEffect(() => {
    const fetchHealthtip = async () => {
      try {
        const response = await fetch(`http://localhost:3001/healthtips/${healthtipId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setHealthTip(data);
      } catch (error) {
        console.error("Error fetching health tip details:", error);
      }
    };

    fetchHealthtip();
  }, [healthtipId]);

  if (!healthtip) {
    return <div>Loading...</div>;
  }
  const textLines = healthtip.text.split('\n');

  return (
    <div className="row justify-content-center detail-container">
      <div className="col-7 details">
        <h4 className="h-details">{healthtip.title}</h4>
        <p className="text-details">{healthtip.summary}</p>
        {textLines.map((line, index) => {
          if (line.startsWith('#')) {
            // Render the line as a heading if it starts with '# '
            return <h4 key={index}>{line.substring(1)}</h4>;
          } else {
            // Render other lines as regular paragraphs
            return <p key={index} style={{ whiteSpace: 'pre-line' }}>{line}</p>;
          }
        })}
        <p className="name-details">Name: {healthtip.name}</p>
      </div>
    </div>
  );
}

export default HealthTip;
