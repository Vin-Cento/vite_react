import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "../assets/navbar.css";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          sx={{
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Link
            to="/"
            className={location.pathname == "/" ? "navbar-active" : "navbar"}
          >
            CHART
          </Link>
        </Typography>
        <Link
          to="/user"
          className={location.pathname == "/user" ? "navbar-active" : "navbar"}
        >
          User
        </Link>
        <Link
          to="/calculator"
          className={
            location.pathname == "/calculator" ? "navbar-active" : "navbar"
          }
        >
          Calculator
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
