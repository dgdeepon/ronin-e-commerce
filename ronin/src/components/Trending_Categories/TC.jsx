import React from "react";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

export default function TC({ imagesArray, columns, text, pt, pb, gap }) {
  return (
    <Box>
      <Box>
        <Center>
          <Text
            pt={pt}
            pb={pb}
            fontWeight={600}
            fontSize={"20px"}
            fontFamily={"sans-serif"}
            letterSpacing={2.5}>
            {text}
          </Text>
        </Center>
      </Box>
      <Grid gap={gap} gridTemplateColumns={`repeat(${columns},1fr)`}>
        {imagesArray.length > 0 &&
          imagesArray.map(({ image }) => {
            return (
              <GridItem key={Math.random()}>
                <Link>
                  <Image src={image} width={"100%"} />
                </Link>
              </GridItem>
            );
          })}
      </Grid>
    </Box>
  );
}
