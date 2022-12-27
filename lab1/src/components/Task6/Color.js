import { React, useState } from "react";

const colorsList = [
  "red",
  "orange",
  "blue",
  "green",
  "yellow",
  "grey",
  "black",
];

function Color() {
  const [color, setColor] = useState("grey");

  // const style = {
  //   color: color,
  // };

  const changeColor = (event) => {
    setColor(event.target.value);
    console.log(color);
  };

  return (
    <div>
      <h1 className="title-task">Task 6</h1>

      <h2 style={{ color: color }}>I'm {color} Color!</h2>
      <select onChange={changeColor}>
        {colorsList.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Color;
