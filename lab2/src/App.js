import React from "react";

import MyCounter from "./components/task1/MyCounter";
import Counters from "./components/task1/Counters";
import Cart from "./components/task2/Cart";
import Game from "./components/task3/Game";

import "./App.css";

const counters = [
  { id: 1, initial: 6, min: -5, max: 10 },
  { id: 2, initial: 5 },
  { id: 3 },
];

const cart = [
  { id: 1, name: "Constructor LEGO", price: 300, min: 0, max: 12 },
  { id: 2, name: "Train Station", price: 200, min: 0, max: 2 },
  { id: 3, name: "Hot Wheels Track", price: 150, min: 0, max: 4 },
];

function App() {
  return (
    <div className="App">
      <MyCounter />
      <Counters counters={counters} />
      <Cart cart={cart} />
      <Game />
    </div>
  );
}

export default App;
