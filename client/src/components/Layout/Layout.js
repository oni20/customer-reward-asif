import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Layout({
  mainLayoutSpecs = {
    bgcolor: "background.paper",
    pt: 0,
    pb: 6,
  },
  containerWidth = "lg",
  children,
}) {
  return (
    <Box sx={mainLayoutSpecs}>
      <Container maxWidth={containerWidth}>{children}</Container>
    </Box>
  );
}
