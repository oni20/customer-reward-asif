import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CustomerTable({
  rows,
  tableCaption = "A basic table example with a caption",
}) {
  return (
    <TableContainer component={Paper} sx={{ marginTop: "10px" }}>
      <Table aria-label="simple table">
        <caption>{tableCaption}</caption>
        <TableHead>
          <TableRow>
            <TableCell align="left">Date</TableCell>
            <TableCell align="right">Bill</TableCell>
            <TableCell align="right">Reward Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, id) => (
            <TableRow
              key={`customerTable-${id}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="right">{row.bill}</TableCell>
              <TableCell align="right">{row.reward}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
