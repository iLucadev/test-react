import React, { useEffect, useState } from "react";
import ItemCount from "../../components/itemCount/ItemCount";
import ItemList from "../../components/itemList/ItemList";

const ItemsContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=Samsung&limit=6"
    )
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.results);
        setLoading(false);
        console.log(res.results);
      });
  }, []);

  /* useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(productsList), 2000);
    });

    myPromise.then((result) => setProducts(result));
  }, []); */

  if (loading)
    return (
      <h1 className=" col-span-3 min-h-screen flex justify-center mx-auto full-width ">
        Loading...
      </h1>
    );

  return (
    <section className="container col-span-3 min-h-screen flex flex-col justify-center items-center mx-auto full-width">
      <div className="container flex justify-center ">
        <h1 className="font-sans">{props.greeting}</h1>
      </div>

      <ItemList products={products} />
    </section>
  );
};

export default ItemsContainer;
