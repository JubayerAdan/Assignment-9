import React, { useEffect, useState } from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import "./Featured.css"; // Import the CSS file for custom styling

const Featured = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const displayedCards = cards.slice(0, 4);

  return (
    <div className="container mt-5">
      <div>
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <h2 className="text-center extra-bold1">Featured Jobs</h2>
            <p>
              <small>
                Explore thousands of job opportunities with all the information
                you need. It's your future.
              </small>
            </p>
          </div>
        </div>
        <div className="featured-cards">
          <div className="featured-cards-grid ">
            {displayedCards.map((card, index) => (
              <div className="featured-card" key={index}>
                <FeaturedCard card={card}></FeaturedCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
