import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import ball from "./ball.png"

function HealthTips () {
  const navigate = useNavigate();

  const navigateToPostTip = () => {
    navigate('/createHealthTip');
  };

  const navigateToHealthTip = (healthtipId) => {
    navigate(`/healthtip/${healthtipId}`); // Use the dynamic URL parameter
  }

    const [listofTips, setListofTips] = useState([]);

    useEffect(() => {
      
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:3001/healthtips");
          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }
          const data = await response.json();
          setListofTips(data); // Update the state with the fetched data
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
          <button type="button" className="btn btn-outline-success" onClick={navigateToPostTip}>Post a tip</button>
        </div>
        <div className = "row blogsDisplay">
          {listofTips.map((healthtip) => {
            return (
                <div className={`col-sm-${listofTips.length < 3 ? '5' : '3'} tip-blog`} onClick={() => navigateToHealthTip(healthtip._id)}>
                  <div className="blogImg">
                    <img className ="blog-image" src={ball}></img>
                  </div>
                  <div className='tipContent'>
                    <b>{healthtip.title} </b>
                    {/* <p>{healthtip.summary.length > 100 ? `${healthtip.summary.slice(0, 100)}...` : healthtip.summary}</p>
                    <div className='userName'>
                      <b>Name: {healthtip.name} </b>
                    </div> */}
                    <div className="forbtn">
                      {/* <button
                        type="button"
                        className="btn-go"
                        onClick={() => navigateToHealthTip(healthtip._id)}
                      >
                        Full Tip
                      </button>   */}
                    </div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>

    )
};

export default HealthTips;


