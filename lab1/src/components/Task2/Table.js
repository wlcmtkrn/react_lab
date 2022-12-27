import React from "react";

function Table(props) {
  return (
    <div>
      <h1 className="title-task">Task 2</h1>
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <td>{props.data.firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{props.data.lastName}</td>
          </tr>
          <tr>
            <th>Occupation</th>
            <td>{props.data.occupation}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
