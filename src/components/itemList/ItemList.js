import React from "react";
import "./ItemList.css";
import Card from "../card/Card";

const ItemList = ({ products }) => {
  return (
    <div
      id="ItemList"
      className="container grid grid-cols-5 grid-rows-2 gap-4 full-width"
    >
      {products.map((product) => {
        if (product.id < 7) {
          return <Card key={product.id} product={product} />;
        }
      })}
    </div>
  );
};

export default ItemList;
