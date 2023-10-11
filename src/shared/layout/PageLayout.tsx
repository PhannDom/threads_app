"use client";

import { Box, Container } from "@mui/material";
import Topbar from "../app/Topbar";
import LeftSideBar from "../app/LeftSideBar";

type Props = {
  children: React.ReactNode;
};
const PageLayout = (props: Props) => {
  return (
    <Box>
      <Topbar />
      <Box sx={{ display: "flex", flexDirection: "row", component: "main" }}>
        <LeftSideBar />
        <Container
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "4rem",
            paddingTop: "4rem",
            backgroundColor: (theme) =>
              `rgb(${theme.vars.palette.background.default}/ 1)`,
            "@media (max-width: 768px)": {
              paddingBottom: "8rem",
            },
            "@media (min-width: 640px)": {
              paddingLeft: "2.5rem",
              paddingRight: "2.5rem",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            {props.children}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default PageLayout;
