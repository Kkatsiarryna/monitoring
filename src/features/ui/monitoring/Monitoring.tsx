import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid2"
import { CorrespondentAccount } from "./correspondentAccount/correspondentAccount"
import { WorkingHoursBISS } from "./workingHoursBISS/WorkingHoursBISS"
import { AccessToDatabase } from "./accessToDatabase/AccessToDatabase"
import { StatusOfPayments } from "./statusOfPayments/StatusOfPayments"
import { SMP } from "./smp/SMP"
import { ErrorsOnLinesFP } from "./errorsOnLinesFP/ErrorsOnLinesFP"
import { Vitriny } from "./vitriny/Vitriny"

export const Monitoring = () => {
  return (
    <Container fixed>
      <Grid container rowSpacing={0} columnSpacing={4} sx={{ p: "10px 0 0 0" }}>
        <CorrespondentAccount />
        <WorkingHoursBISS />
        <AccessToDatabase />
        <StatusOfPayments />
        <SMP />
        <ErrorsOnLinesFP />
        <Vitriny />
      </Grid>
    </Container>
  )
}
