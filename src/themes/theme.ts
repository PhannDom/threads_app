import { PaletteOptions } from "@mui/material";
import {
  createTheme,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";

const defaultTheme = createTheme();

const GreyPalette = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
};

const lightPalette: PaletteOptions = {
  mode: "light",
  custom: defaultTheme.palette.augmentColor({
    color: { main: GreyPalette[800] },
  }),
};

const darkPalette: PaletteOptions = {
  mode: "dark",
  custom: defaultTheme.palette.augmentColor({ color: { main: "#fff" } }),
};

export const theme = extendTheme({
  cssVarPrefix: "threads",
  colorSchemes: {
    light: {
      palette: {
        ...lightPalette,
        primary: {
          main: "#512da8",
        },
        secondary: {
          main: "#84A82D",
        },
        grey: GreyPalette,
      },
    },
    dark: {
      palette: {
        ...darkPalette,
        primary: {
          main: "#512da8",
        },
        secondary: {
          main: "#84A82D",
        },
        grey: GreyPalette,
      },
    },
  },
});
