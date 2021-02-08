import React from "react";
import "./Card.css";

const Card = ({ product }) => {
  return (
    <div className="cardItem shadow-md container flex flex-col rounded-md space-y-2 ">
      <img className="cardItem__img" src={product.image} alt="" />
      <h2 className="cardItem__title">{product.name}</h2>
      <p className="cardItem__description">{product.description}</p>
      <p className="cardItem__price">${product.price}</p>
    </div>
  );
};

export default Card;
