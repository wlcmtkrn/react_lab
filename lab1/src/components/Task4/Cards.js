import React from "react";
import Product from "./Product";

const productsList = [
  {
    id: 1,
    sourceImage:
      "https://content1.rozetka.com.ua/goods/images/big_tile/254116608.jpg",
    title: "Acer Aspire 7 A715-42G-R8BL",
    price: "36 999 ₴",
    availability: "В нявності",
  },
  {
    id: 2,
    sourceImage:
      "https://content1.rozetka.com.ua/goods/images/big_tile/285886586.jpg",
    title: "Ноутбук ASUS TUF Gaming F15",
    price: "34 999 ₴",
    availability: "Немає в нявності",
  },
  {
    id: 3,
    sourceImage:
      "https://content.rozetka.com.ua/goods/images/big_tile/30872664.jpg",
    title: "Ноутбук Apple MacBook Air 13",
    price: "42 999 ₴",
    availability: "Немає в нявності",
  },
];

function Cards() {
  return (
    <div>
      <h1 className="title-task">Task 4</h1>

      {productsList.map((product) => (
        <Product
          key={product.id}
          sourceImage={product.sourceImage}
          name={product.title}
          price={product.price}
          availability={product.availability}
        />
      ))}
    </div>
  );
}

export default Cards;
