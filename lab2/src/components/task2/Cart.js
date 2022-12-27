import { React, useState } from "react";

import Items from "./Items";
import TableMyHeader from "./TableMyHeader";
import TableMyFooter from "./TableMyFooter";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

function Cart(props) {
  const [itemsQuantity, setItemsQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const changeTotalQuantity = (quantity) => {
    setItemsQuantity(itemsQuantity + quantity);
  };

  const changeTotalPrice = (price) => {
    setTotalPrice(totalPrice + price);
  };

  return (
    <div className="content">
      <h1>Cart</h1>
      <Table>
        <TableMyHeader />
        <TableBody>
          {props.cart.map((item) => (
            <Items
              key={item.id}
              name={item.name}
              price={item.price}
              min={item.min}
              max={item.max}
              onChangeTotalQuantity={changeTotalQuantity}
              onChangeTotalPrice={changeTotalPrice}
            />
          ))}
        </TableBody>
        <TableMyFooter itemsQuantity={itemsQuantity} totalPrice={totalPrice} />
      </Table>
    </div>
  );
}

export default Cart;
