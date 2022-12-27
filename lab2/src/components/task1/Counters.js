import React from "react";

import MyCounter from "./MyCounter";

function Counters(props) {
  const { counters } = props;

  return (
    <div>
      {counters.map((item) => (
        <MyCounter
          key={item.id}
          initial={item.initial}
          min={item.min}
          max={item.max}
        />
      ))}
    </div>
  );
}

export default Counters;
