import React, { useEffect, useState } from "react";
import ItemCount from "../../components/itemCount/ItemCount";

const ItemsContainer = (props) => {
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
    <>
      <div className="container flex justify-center ">
        <h1 className="font-sans">{props.greeting}</h1>
      </div>

      <div className="container flex justify-center ">
        <ItemCount
          stock={12}
          contador={contador}
          onAdd={onAdd}
          onSubstract={onSubstract}
        />
      </div>
    </>
  );
};

export default ItemsContainer;
