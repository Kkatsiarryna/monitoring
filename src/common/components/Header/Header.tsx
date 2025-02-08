import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import { useState, MouseEvent } from "react"
import UpdateIcon from "@mui/icons-material/Update"
import { Link } from "react-router"
import Switch from "@mui/material/Switch"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { changeTheme, selectAppStatus, selectThemeMode } from "../../../app/appSlice"
import { useAppSelector } from "../../hooks/useAppSelector"
import LinearProgress from "@mui/material/LinearProgress"

const pages = [
  { name: "Мониторинг", path: "/monitoring" },
  { name: "Параметры", path: "/parameters" },
  { name: "Поиск логов", path: "/log-search" },
]

export function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector(selectThemeMode)
  const status = useAppSelector(selectAppStatus)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const changeModeHandler = () => {
    dispatch(changeTheme({ themeMode: themeMode === "light" ? "dark" : "light" }))
  }

  // sx={{ height: '50px' }}
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ margin: "-7px" }}>
          {/*<Box sx={{ display: { xs: 'none', md: 'flex' } , my: -4 }}>*/}
          {/*    <Icon iconId={"logoSVG"} width={'100'} height={'100'}></Icon>*/}
          {/*</Box>*/}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon fontSize="small" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={page.path} style={{ textDecoration: "none", color: "inherit" }}>
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                variant="text"
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: -1, color: "white", display: "block", fontWeight: 400 }}
                color="inherit"
              >
                <Link to={page.path} style={{ textDecoration: "none", color: "inherit" }}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>
          <IconButton>
            <UpdateIcon fontSize="medium" sx={{ color: "#fff" }} />
          </IconButton>
          <Switch color={"default"} onChange={changeModeHandler} />
        </Toolbar>
      </Container>
      {status === "loading" && <LinearProgress />}
    </AppBar>
  )
}
