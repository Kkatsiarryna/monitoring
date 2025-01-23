import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid2"
import { DatabaseQueryPeriod } from "./databaseQueryPeriod/DatabaseQueryPeriod"
import { LogFolder } from "./logFolder/LogFolder"
import { MessageFolder } from "./messageFolder/MessageFolder"

export const Parameters = () => {
  return (
    <Container fixed>
      <Grid container rowSpacing={0} columnSpacing={4} sx={{ p: "10px 0 0 0" }}>
        <DatabaseQueryPeriod />
        <LogFolder />
        <MessageFolder />
      </Grid>
    </Container>
  )
}
