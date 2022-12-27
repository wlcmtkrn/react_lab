import React from "react";

function LikeBtn() {
  const OnLogButton = () => {
    console.log("Like");
  };

  return (
    <div>
      <button className="likeBtn" onClick={OnLogButton}></button>
    </div>
  );
}

export default LikeBtn;
