import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import { StyledTypography } from "../../../common/styles/styles"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

export const MessageFolder = () => {
  return (
    <Box my={4}>
      <Paper elevation={3} style={{ borderRadius: "15px" }}>
        <Box p={2} pb={0}>
          <StyledTypography variant="h5" gutterBottom>
            Путь к папке с сообщениями
          </StyledTypography>
        </Box>
        <Box p={2} display="flex" alignItems="center">
          <TextField
            id="outlined-basic"
            label="ENDBISS"
            variant="outlined"
            size="small"
            style={{ marginRight: "8px" }}
          />
          <Button variant="contained">Изменить</Button>
        </Box>
        <Box p={2} display="flex" alignItems="center">
          <TextField
            id="outlined-basic"
            label="ENDSPFI"
            variant="outlined"
            size="small"
            style={{ marginRight: "8px" }}
          />
          <Button variant="contained">Изменить</Button>
        </Box>
      </Paper>
    </Box>
  )
}
