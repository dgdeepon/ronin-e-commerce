import { Box, Center, Text, Image, Flex, Link } from "@chakra-ui/react";
import React from "react";
// import { Link } from "react-router-dom";

export default function D_O_T_W() {
  return (
    <Box>
      <Box>
        <Center>
          <Text
            fontWeight={600}
            fontSize={"20px"}
            fontFamily={"montserrat,sans-serif"}
            letterSpacing={1}>
            Designs of the Week
          </Text>
        </Center>
      </Box>
      <Box width={"100%"} border={"1px solid"}>
        <Flex border={"1px solid"}>
          <Image
            width={"100%"}
            src={
              "https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1681221129.jpg"
            }
          />

          <Image
            width={"100%"}
            src={
              "https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1681221129.jpg"
            }
          />
        </Flex>
      </Box>
      <Box>
        <Link>
          <Image
            objectFit={"cover"}
            mt={3}
            width={"100%"}
            src="https://images.bewakoof.com/uploads/grid/app/thin-strip-desktop-coming-soon-week3-1681197175.jpg"
          />
        </Link>
      </Box>
    </Box>
  );
}
