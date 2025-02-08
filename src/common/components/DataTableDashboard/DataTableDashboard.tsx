import React from "react"
import Paper from "@mui/material/Paper"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Box from "@mui/material/Box"
import { StyledTable, StyledTableCell, StyledTypography } from "../../styles/styles"

export type DataRowType = {
  [key: string]: string | number
}

export type DataTableType = {
  title: string
  columns?: string[]
  dataRow?: DataRowType
}

const DataTableDashboard: React.FC<DataTableType> = ({ title, columns, dataRow }) => {
  return (
    <Box my={2}>
      <Paper elevation={5} style={{ borderRadius: "15px" }}>
        <Box p={2}>
          <StyledTypography variant="h5" gutterBottom>
            {title}
          </StyledTypography>
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

export default DataTableDashboard
