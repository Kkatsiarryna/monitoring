import { styled } from "@mui/system"
import Table from "@mui/material/Table"
import TableCell from "@mui/material/TableCell"
import Typography from "@mui/material/Typography"

export const StyledTable = styled(Table)({
  borderCollapse: "collapse",
})

export const StyledTableCell = styled(TableCell)({
  borderBottom: "none",
  padding: "8px 15px",
  fontWeight: "500",
})

export const StyledTypography = styled(Typography)({
  fontSize: "22px",
  fontWeight: "700",
  lineHeight: "100%",
  textAlign: "center",
})
