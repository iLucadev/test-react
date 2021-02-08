//rafce

import React from "react";

const ItemCount = ({ stock, onAdd, onSubstract, contador }) => {
  return (
    <>
      <div className="p-6 container flex flex-col items-center max-w-xs rounded-xl shadow-md space-y-4">
        <p>Contador</p>
        <div className="container grid grid-cols-3 gap-4 py-6 px-10">
          {contador > 0 ? (
            <button
              onClick={onSubstract}
              className="substract col-start-1 flex justify-center items-center font-black text-2xl"
              type=""
            >
              −
            </button>
          ) : null}

          <b className="contador col-start-2 flex justify-center items-center">
            {contador}
          </b>

          {contador < stock ? (
            <button
              onClick={() => {
                onAdd(stock);
              }}
              className="addition col-start-3 flex justify-center items-center font-black text-2xl"
              type=""
            >
              +
            </button>
          ) : null}
        </div>

        <button
          className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
          type=""
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ItemCount;
