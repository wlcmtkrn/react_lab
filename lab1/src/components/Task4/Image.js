import React from "react";

function Image(props) {
  return (
    <div>
      <img
        src={props.sourceImage}
        alt="productImage"
        width={props.width}
        height={props.height}
      />
    </div>
  );
}

export default Image;
