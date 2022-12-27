import React from "react";

import LikeBtn from "./LikeBtn";
import AboutProduct from "./AboutProduct";
import Image from "./Image";

function Product(props) {
  return (
    <div className="card">
      <LikeBtn />
      <AboutProduct>
        <Image sourceImage={props.sourceImage} width="100" height="80" />
        <h4>{props.name}</h4>
        <h1>{props.price}</h1>
        <h4>{props.availability}</h4>
      </AboutProduct>
    </div>
  );
}

export default Product;
