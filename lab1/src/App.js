import React from "react";

import HelloWorld from "./components/Task1/HelloWorld";
import Table from "./components/Task2/Table";
import FuncComp from "./components/Task3/FuncComp";
import Cards from "./components/Task4/Cards";
import Cities from "./components/Task5/Cities";
import Color from "./components/Task6/Color";

import "./App.css";

const data = {
  firstName: "John",
  lastName: "Silver",
  occupation: "Pirate Captain",
};

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Table data={data} />
      <FuncComp props1="functional component" props2={data} />
      <Cards />
      <Cities />
      <Color />
    </div>
  );
}

export default App;
