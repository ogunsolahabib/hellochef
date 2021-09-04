import React from "react";
import { Box, HStack, IconButton, useToken } from "@chakra-ui/react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import RecipeCard from "components/RecipeCard";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

interface Props {
  pageRecipeList: any[];
}

const RecipeListSlider: React.FC<Props> = ({ pageRecipeList }) => {
  const [grey200] = useToken("colors", ["grey.200"]);
  const trackRef: any = useRef(null);
  const [trackElement, setTrackElement] = useState<any>();
  const [windowWidth, setWindowWidth] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [movedWidth, setMovedWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, []);

  useEffect(() => {
    setTrackElement(trackRef.current);
    console.log(trackRef.current?.offsetWidth);
  }, [windowWidth]);

  const handleRightButtonClick = () => {
    setTranslateX(-trackElement.offsetWidth - 0.05 * trackElement.offsetWidth);
  };
  const handleLeftButtonClick = () => {
    setTranslateX(trackElement);
  };

  return (
    <HStack m="10rem auto" justifyContent="space-between">
      <IconButton
        aria-label="carousel-left"
        variant="unstyled"
        w="10rem"
        h="10rem"
        _focus={{
          outline: "none",
        }}
        d="block"
        icon={<BsChevronCompactLeft size="10rem" color={`${grey200}`} />}
        onClick={handleLeftButtonClick}
      />
      <Box
        w="68vw"
        maxW="68vw"
        overflow="hidden"
        ref={trackRef}
        marginInlineStart="0 !important"
      >
        <HStack
          spacing="5%"
          transition="all 0.1s ease"
          transform={`translateX(${translateX / 10}rem)`}
        >
          {pageRecipeList.map((props) => (
            <RecipeCard {...props} />
          ))}
        </HStack>
      </Box>
      <IconButton
        _focus={{
          outline: "none",
        }}
        aria-label="carousel-right"
        variant="unstyled"
        w="10rem"
        h="10rem"
        icon={<BsChevronCompactRight size="10rem" color={`${grey200}`} />}
        onClick={handleRightButtonClick}
      />
    </HStack>
  );
};

export default RecipeListSlider;
