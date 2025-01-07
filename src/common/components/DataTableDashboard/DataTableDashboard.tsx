import React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { styled } from "@mui/system"

const StyledTable = styled(Table)({
  borderCollapse: "collapse",
})

const StyledTableCell = styled(TableCell)({
  borderBottom: "none",
})

export type DataRowType = {
  [key: string]: string | number
}

export type DataTableType = {
  title: string
  columns?: string[]
  dataRow?: DataRowType
}

const DataTable: React.FC<DataTableType> = ({ title, columns, dataRow }) => {
  return (
    <Box my={4}>
      <Paper elevation={3}>
        <Box p={2}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <TableContainer>
            <StyledTable>
              {columns && (
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <StyledTableCell key={column}>{column}</StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
              )}
              {dataRow && (
                <TableBody>
                  {Object.entries(dataRow).map(([key, value]) => (
                    <TableRow key={key}>
                      <StyledTableCell>{key}</StyledTableCell>
                      <StyledTableCell>{value}</StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </StyledTable>
          </TableContainer>
        </Box>
      </Paper>
    </Box>
  )
}

export default DataTable
