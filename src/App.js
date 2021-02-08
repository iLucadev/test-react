import "./App.css";
import { Component } from "react";
import "./assets/tailwind.css";
/* import logo from "./logo.svg"; */
import ItemsContainer from "./containers/itemsContainer/ItemsContainer";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="container min-h-screen grid grid-cols-3 grid-flow-row auto-rows-min content-between mx-auto full-width">
      <Header />

      <ItemsContainer greeting="Bienvenidos" />

      <Footer />
    </div>
  );
}

export default App;
