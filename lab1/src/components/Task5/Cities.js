import React from "react";

const cities = [
  { id: 1, name: "Chicago" },
  { id: 2, name: "Los Angelos" },
  { id: 3, name: "New York" },
];

function Cities() {
  const cityChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1 className="title-task">Task 5</h1>

      <select onChange={cityChange}>
        {cities.map((city) => (
          <option key={city.id}>{city.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Cities;
