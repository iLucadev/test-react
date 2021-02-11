import React from "react";
import "./ItemDetail.css";
import Card from "../card/Card";

const ItemDetail = ({ products }) => {
  return (
    <div
      id="ItemDetail"
      className="container flex items-center justify-center full-width"
    >
      <Card product={products} />
    </div>
  );
};

export default ItemDetail;
