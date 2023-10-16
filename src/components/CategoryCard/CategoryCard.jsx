import React from "react";
import "./CategoryCard.css";
const CategoryCard = ({ card }) => {
  const { logo, category_name, availability } = card;
  //   console.log(card.logo);
  return (
    <div className="p-3 ct-card">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="mt-4">
        <h6>
          <strong>{category_name}</strong>
        </h6>
        <p>
          <small>{availability}</small>
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
