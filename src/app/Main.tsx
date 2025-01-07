import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid2"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"

export const Main = () => {
  const theme = useTheme()
  return (
    <Container fixed>
      <Grid container spacing={4}>
        <p>Hello</p>
      </Grid>
      <Paper sx={{ p: "0 10px 10px 10px" }}>
        <p>Hello перлзед56хздерзкедрзре</p>
        <Typography sx={{ color: theme.palette.text.primary }}>Hello упкзпщлзерлзщекрщре</Typography>
      </Paper>
    </Container>
  )
}
