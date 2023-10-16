import React, { useEffect, useState } from "react";
import "./Category.css";
import CategoryCard from "../CategoryCard/CategoryCard";
const Category = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <div>
        <div>
          <h2 className="text-center extra-bold1">Job Category List</h2>
          <p className="ms-5 ps-5">
            <small>
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </small>
          </p>
        </div>
        <div>
          <div className="d-flex">
            {cards.map((card, index) => (
              <div className="m-3">
                <CategoryCard key={index} card={card}></CategoryCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
