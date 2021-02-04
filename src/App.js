import "./App.css";
import { Component } from "react";
import "./assets/tailwind.css";
/* import logo from "./logo.svg"; */
import ItemsContainer from "./containers/itemsContainer/ItemsContainer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <header className="container py-8 px-10 flex justify-between mx-auto full-width">
        <Header />
      </header>

      <section className="container py-8 px-10 flex flex-col justify-center mx-auto full-width">
        <ItemsContainer greeting="Bienvenidos" />
      </section>

      <footer></footer>
    </>
  );
}

export default App;
