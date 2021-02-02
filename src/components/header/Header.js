import React from "react";
import Cart from "../cart/Cart";

const Header = (props) => {
  return (
    <>
      <h1 className="text-lg text-black font-semibold">Bootlegger</h1>

      <Cart />
    </>
  );
};

export default Header;
