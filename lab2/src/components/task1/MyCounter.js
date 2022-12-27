import React, { useState } from "react";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const MyButton = styled(Button)(() => ({
  margin: 10,
  backgroundColor: "violet",
  "&:hover": {
    backgroundColor: "red",
  },
}));

function MyCounter(props) {
  const { initial = 0, min = -10, max = 10 } = props;
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount(count < max ? count + 1 : max);
    // console.log(count);
  };

  const decrement = () => {
    setCount(count > min ? count - 1 : min);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h3>Поточний рахунок: {count}</h3>
      <MyButton variant="contained" size="small" onClick={increment}>
        +
      </MyButton>
      <MyButton variant="contained" size="small" onClick={decrement}>
        -
      </MyButton>
      <Button variant="outlined" onClick={reset}>
        Reset
      </Button>
    </div>
  );
}

export default MyCounter;
