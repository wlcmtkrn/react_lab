import { React, useState } from "react";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const MyButton = styled(Button)(() => ({
  margin: 10,
  backgroundColor: "green",
  "&:hover": {
    backgroundColor: "red",
  },
}));

function Items(props) {
  const [quantity, setQuantity] = useState(0);
  const {
    id,
    name,
    price,
    min,
    max,
    onChangeTotalQuantity,
    onChangeTotalPrice,
  } = props;

  const increment = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
      onChangeTotalQuantity(1);
      onChangeTotalPrice(price);
    } else setQuantity(max);
  };

  const decrement = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
      onChangeTotalQuantity(-1);
      onChangeTotalPrice(-price);
    } else setQuantity(min);
  };

  return (
    <TableRow key={id}>
      <TableCell>{name}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>
        <MyButton variant="contained" size="small" onClick={increment}>
          +
        </MyButton>
        {quantity}
        <MyButton variant="contained" size="small" onClick={decrement}>
          -
        </MyButton>
      </TableCell>
      <TableCell>{quantity * price}</TableCell>
    </TableRow>
  );
}

export default Items;
