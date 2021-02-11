import React, { useEffect, useState } from "react";
import ItemCount from "../../components/itemCount/ItemCount";
import ItemDetail from "../../components/itemDetail/ItemDetail";

const ItemDetailContainer = () => {
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

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.mercadolibre.com/products/search?status=active&site_id=MLA&parent_product_id=MLA10025564"
    )
      .then((producto) => producto.json())
      .then((producto) => {
        setProducts(producto.results[0]);
        setLoading(false);
        console.log(producto.results[0]);
      });
  }, []);

  if (loading)
    return (
      <h1 className=" col-span-3 min-h-screen flex justify-center mx-auto full-width ">
        Loading...
      </h1>
    );

  return (
    <section className="container col-span-3 min-h-screen flex flex-col justify-center items-center mx-auto full-width">
      <ItemDetail products={products} />
      <ItemCount
        stock={12}
        contador={contador}
        onAdd={onAdd}
        onSubstract={onSubstract}
      />
    </section>
  );
};

export default ItemDetailContainer;
