import React from "react";

function FuncComp(props) {
  return (
    <div>
      <h1 className="title-task">Task 3</h1>

      <h1>
        I'm a {props.props1} and this is data
        <ul>
          <li>{props.props2.firstName}</li>
          <li>{props.props2.lastName}</li>
          <li>{props.props2.occupation}</li>
        </ul>
      </h1>
    </div>
  );
}

export default FuncComp;
