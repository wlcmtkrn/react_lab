import React from "react";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import { styled } from "@mui/material/styles";

const StyledTableRow = styled(TableRow)(() => ({
  backgroundColor: "rgb(226, 239, 255)",
}));

function TableMyFooter(props) {
  return (
    <TableFooter>
      <StyledTableRow>
        <TableCell colSpan={2}>Totals</TableCell>
        <TableCell>
          <h2>{props.itemsQuantity}</h2>
        </TableCell>
        <TableCell>
          <h1>{props.totalPrice}</h1>
        </TableCell>
      </StyledTableRow>
    </TableFooter>
  );
}

export default TableMyFooter;
