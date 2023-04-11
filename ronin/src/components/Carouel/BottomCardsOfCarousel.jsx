import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const imageArray = [
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-newarrivals-1679566144.jpg",
    text: "New Arrivals",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-common-bestseller-1679567164.jpg",
    text: "Bestsellers",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-common-official-collabb-1679567240.jpg",
    text: "Official Collaborations",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/vote-thumbnail-1668508339.jpg",
    text: "Vote for Designs",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg",
    text: "Last Sizes Left",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-common-plus-size-1679567275.jpg",
    text: "Plus Size",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg",
    text: "Hot Deals",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/me-shirt-thumbnail-1668508337.jpg",
    text: "Customization",
  },
];
export default function BottomCardsOfCarousel() {
  return (
    <Box pb={50} bg="#fff">
      <Flex width={"80%"} margin={"auto"} gap={6}>
        {imageArray.length > 0 &&
          imageArray.map(({ image, text }) => {
            return (
              <Link to="#">
                <Box>
                  <Image src={image} width={"100%"} />
                  <Text
                    textAlign={"center"}
                    fontSize={"12px"}
                    fontWeight={600}
                    mt={5}>
                    {text}
                  </Text>
                </Box>
              </Link>
            );
          })}
      </Flex>
    </Box>
  );
}
