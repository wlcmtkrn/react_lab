import React from "react";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import { styled } from "@mui/material/styles";

// const rowNames = ["Name", "Price", "Quantity", "Total"];

const StyledTableRow = styled(TableRow)(() => ({
  backgroundColor: "lightgreen",
}));

function TableMyHeader() {
  return (
    <TableHead>
      <StyledTableRow>
        <TableCell>Name</TableCell>
        <TableCell>Price</TableCell>
        <TableCell>Quantity</TableCell>
        <TableCell>Total</TableCell>
      </StyledTableRow>
    </TableHead>
  );
}

export default TableMyHeader;
