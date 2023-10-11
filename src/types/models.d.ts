declare global {
  type Nullable<T> = T | null;
}
import "@mui/material/styles";
import "@mui/material/themeCssVarsAugmentation";

declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }

  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}
