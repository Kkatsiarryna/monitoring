import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid2"
import { SearchLogs } from "./searchLogs/SearchLogs"

export const Logs = () => {
  // const { data, error } = useGetPokemonQuery("")
  // console.log({ data })
  // console.log({ error })
  return (
    <Container fixed>
      <Grid container rowSpacing={0} columnSpacing={4} sx={{ p: "10px 0 0 0" }}>
        <SearchLogs />
      </Grid>
    </Container>
  )
}
