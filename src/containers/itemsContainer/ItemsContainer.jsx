import React, { useEffect, useState } from "react";
import ItemCount from "../../components/itemCount/ItemCount";
import ItemList from "../../components/itemList/ItemList";
import productsList from "../../components/itemList/productsList";

const ItemsContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(productsList), 2000);
    });

    myPromise.then((result) => setProducts(result));
  }, []);

  const [contador, setContador] = useState(1);

  const onAdd = (stock) => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      console.log("no hay stock");
    }
  };

  const onSubstract = (stock) => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <section className="container col-span-3 min-h-screen flex flex-col justify-center">
      <div className="container flex justify-center ">
        <h1 className="font-sans">{props.greeting}</h1>
      </div>

      <ItemList products={products} />

      <ItemCount
        stock={12}
        contador={contador}
        onAdd={onAdd}
        onSubstract={onSubstract}
      />
    </section>
  );
};

export default ItemsContainer;
