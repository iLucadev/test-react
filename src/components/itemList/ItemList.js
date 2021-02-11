import React from "react";
import "./ItemList.css";
import Card from "../card/Card";

const ItemList = ({ products }) => {
  return (
    <div
      id="ItemList"
      className="container grid gap-4 justify-center full-width"
    >
      {products.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ItemList;
