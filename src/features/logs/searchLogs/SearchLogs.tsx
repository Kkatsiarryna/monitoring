import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

export const SearchLogs = () => {
  const handleChange = (event: SelectChangeEvent) => {
    // setAge(event.target.value as string);
  }

  return (
    <Box my={4}>
      <Paper elevation={3} style={{ borderRadius: "15px" }}>
        <Box p={2} display="flex" alignItems="center" flexDirection={"column"}>
          <Box display="flex" alignItems="center" flexDirection={"row"}>
            {/* <StyledTypography variant="h5" gutterBottom>
             Месяц
            </StyledTypography> */}
            <Box p={2} display="flex" alignItems="center" flexDirection={"column"}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Месяц</InputLabel>
                <Select id="demo-simple-select" value={"1"} label="Месяц" onChange={handleChange}>
                  <MenuItem value={1}>Январья</MenuItem>
                  <MenuItem value={2}>Февраль</MenuItem>
                  <MenuItem value={3}>Март</MenuItem>
                  <MenuItem value={4}>Апрель</MenuItem>
                  <MenuItem value={5}>Май</MenuItem>
                  <MenuItem value={6}>Июнь</MenuItem>
                  <MenuItem value={7}>Июль</MenuItem>
                  <MenuItem value={8}>Август</MenuItem>
                  <MenuItem value={9}>Сентябрь</MenuItem>
                  <MenuItem value={10}>Октябрь</MenuItem>
                  <MenuItem value={11}>Ноябрь</MenuItem>
                  <MenuItem value={12}>Декабрь</MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="outlined-basic"
                label="Начало периода"
                variant="outlined"
                size="small"
                style={{ marginTop: "16px" }}
              />
            </Box>

            {/* <StyledTypography variant="h5" gutterBottom>
            Система
            </StyledTypography> */}
            <Box p={2} display="flex" alignItems="center" flexDirection={"column"}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Система</InputLabel>
                <Select id="demo-simple-select" value={"1"} label="Система" onChange={handleChange}>
                  <MenuItem value={1}>Система 1</MenuItem>
                  <MenuItem value={2}>Система 2</MenuItem>
                  <MenuItem value={3}>Система 3</MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="outlined-basic"
                label="Конец периода"
                variant="outlined"
                size="small"
                style={{ marginTop: "16px" }}
              />
            </Box>
          </Box>
          <Button variant="contained">Отобрать</Button>
        </Box>
      </Paper>
    </Box>
  )
}
