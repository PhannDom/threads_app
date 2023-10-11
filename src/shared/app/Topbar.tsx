"use client";

import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Link,
} from "@mui/material";

import { useColorScheme } from "@mui/material/styles";

// import { Brightness4, Brightness7 } from "@mui/icons-material";
import LogoIcon from "../common/LogoIcon";

const Topbar = () => {
  const { mode, setMode } = useColorScheme();

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Box
          href="/"
          component={Link}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <LogoIcon />
        </Box>

        <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          Threads
        </Typography>
        <Button
          color="inherit"
          variant="outlined"
          sx={{ borderRadius: "1rem" }}
        >
          Sign In
        </Button>

        {/* <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
          {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
