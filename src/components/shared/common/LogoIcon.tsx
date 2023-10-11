"use client";

import { Box } from "@mui/material";
import Image from "next/image";

import logo from "@/assets/logo.svg";
const LogoIcon = () => {
  return (
    <Box display="inline-flex" width={50}>
      <Image src={logo} alt="logo" />
    </Box>
  );
};

export default LogoIcon;
