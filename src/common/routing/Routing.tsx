import { Route, Routes } from "react-router"
import { Monitoring } from "../../features/monitoring/Monitoring"
import { Parameters } from "../../features/parameters/Parameters"
import { Logs } from "../../features/logs/Logs"

export const Path = {
  Main: "/",
  // Login: 'login',
  Monitoring: "monitoring",
  Parameters: "parameters",
  Logs: "log-search",
} as const

export const Routing = () => {
  return (
    <Routes>
      {/*<Route path={Path.Main} element={<Main />} />*/}
      <Route path={Path.Main} element={<Monitoring />} />
      <Route path={Path.Monitoring} element={<Monitoring />} />
      <Route path={Path.Parameters} element={<Parameters />} />
      <Route path={Path.Logs} element={<Logs />} />
      {/*<Route path={Path.Login} element={<Login />} />*/}
    </Routes>
  )
}
