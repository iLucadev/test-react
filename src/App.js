import "./App.css";
import { Component } from "react";
import "./assets/tailwind.css";
/* import logo from "./logo.svg"; */
import ItemsContainer from "./containers/itemsContainer/ItemsContainer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <header className="container py-8 px-10 flex justify-between full-width">
        <Header />
      </header>

      <div className="container py-8 px-10 flex justify-center full-width">
        <ItemsContainer greeting="Bienvenidos" />
      </div>

      <footer></footer>
    </>
  );
}

export default App;
