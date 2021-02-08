import React from "react";
import Cart from "../cart/Cart";

const Header = (props) => {
  return (
    <>
      <header className="container col-span-6 flex items-center py-4 px-6 flex justify-between mx-auto full-width">
        <h1 className="text-lg text-black font-semibold">Ebenezer</h1>

        <Cart />
      </header>
    </>
  );
};

export default Header;
