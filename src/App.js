import "./App.css";
import { Component } from "react";
import "./assets/tailwind.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
/* import logo from "./logo.svg"; */
import Header from "./components/header/Header";
import ItemsContainer from "./containers/itemsContainer/ItemsContainer";
import ItemDetailContainer from "./containers/itemDetailContainer/ItemDetailContainer";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <ItemsContainer greeting="Bienvenidos" />
          <ItemDetailContainer />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
