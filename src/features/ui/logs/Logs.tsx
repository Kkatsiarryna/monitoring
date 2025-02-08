import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid2"
import { SearchLogs } from "./searchLogs/SearchLogs"
import { useGetWeatherQuery } from "../../api/logsApi"

export const Logs = () => {
  const { data } = useGetWeatherQuery()

  console.log("DATA: " + JSON.stringify(data))
  //console.log("ERROR: " + error);

  return (
    //   <Container fixed>
    //   <Grid container rowSpacing={0} columnSpacing={4} sx={{ p: "20px 0 0 0" }}>
    //   <SearchLogs/>
    //   </Grid>
    // </Container>
    <div key={1}> 1</div>
  )
}
