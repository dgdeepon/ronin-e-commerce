import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function HeaderCarousel({ imageArray }) {
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const [slider, setSlider] = React.useState(imageArray);

  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };
  return (
    <Box overflow={"hidden"} position={"relative"} bg="#fff">
      <IconButton
        _hover={{
          background: "tranparent",
        }}
        bg="transparent"
        color={"#fff"}
        aria-label="left-arrow"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider.slickPrev()}>
        <FontAwesomeIcon icon={faCircleChevronLeft} fontSize={"40px"} />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        _hover={{
          background: "tranparent",
        }}
        bg="transparent"
        color={"#fff"}
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider.slickNext()}>
        <FontAwesomeIcon icon={faCircleChevronRight} fontSize={"40px"} />
      </IconButton>
      <Slider {...settings}>
        {imageArray.length &&
          imageArray.map(({ image }) => {
            return (
              <Box key={Math.random()} px={3}>
                <Image src={image} />
              </Box>
            );
          })}
      </Slider>
    </Box>
  );
}
