import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function LandscapeImage({ src }) {
  return (
    <Box mt={3.5}>
      <Image src={src} width={"100%"} objectFit={"cover"} />
    </Box>
  );
}
