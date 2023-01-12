import { FC } from "react";

import { Box, CircularProgress } from "@mui/material";

export const Loader: FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
};
