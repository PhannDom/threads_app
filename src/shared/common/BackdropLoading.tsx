"use client";

import { Backdrop, CircularProgress } from "@mui/material";

const BackdropLoading = () => {
  console.log("Backdrop Loading");
  return (
    <div className="tuan-01">
      <Backdrop
        className="tuan-02"
        sx={{
          color: "#fff",
          zIndex: (theme) => {
            return theme.zIndex.drawer + 1000;
          },
          opacity: 1,
        }}
        open
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </div>
  );
};

export default BackdropLoading;
