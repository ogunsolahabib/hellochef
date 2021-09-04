import React from "react";

import { Box, Divider, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import RadioButtonList from "components/RadioButtonList";
import { useAppContext } from "Context";

interface Props {}

const CountSelectionGrid: React.FC<Props> = ({}) => {
  const { peopleCount, setPeopleCount, recipeCount, setRecipeCount } =
    useAppContext();
  const gridItemProps = {
    w: { base: "full", xl: "50%" },
    bg: "white",
    p: { base: "3rem", xl: "3rem 5rem" },
    borderRadius: ".5rem",
  };
  return (
    <Stack
      spacing="5rem"
      direction={{ base: "column", lg: "row" }}
      m="5rem"
      fontWeight="600"
    >
      <Box {...gridItemProps}>
        <Heading size="md" mb="2rem">
          Customise Your Plan
        </Heading>
        <VStack spacing="3rem" w="full">
          <Box m="auto" w="full">
            <Heading size="sm" textAlign="left" mb="1rem">
              Number of People:
            </Heading>
            <RadioButtonList
              options={[2, 3, 4]}
              setFunction={setPeopleCount}
              currentValue={peopleCount}
            />
          </Box>
          <Box m="auto" w="full">
            <Heading size="sm" textAlign="left" mb="1rem">
              Recipes per Week:
            </Heading>
            <RadioButtonList
              options={[3, 4, 5]}
              setFunction={setRecipeCount}
              currentValue={recipeCount}
            />
          </Box>
        </VStack>
      </Box>
      <Box
        {...gridItemProps}
        pos="relative"
        p="0"
        _before={{
          content: `''`,
          display: "block",
          pos: "absolute",
          bg: "white",
          w: "3rem",
          h: "3rem",
          transform: "rotate(45deg)",
          top: "12rem",
          left: "-1rem",
          borderRadius: ".5rem",
        }}
      >
        <Box
          h="11rem"
          d="grid"
          placeItems="center"
          p={{ base: "3rem", xl: "3rem 5rem" }}
        >
          <Flex justifyContent="space-between" w="full">
            <Box color="grey.200">
              {recipeCount} Recipes for {peopleCount} People
            </Box>
            <Box>{recipeCount * peopleCount} Servings per Week</Box>
          </Flex>
        </Box>
        <Divider orientation="horizontal" pos="absolute" left="0" right="0" />
        <VStack spacing="3rem" w="full" p={{ base: "3rem", xl: "3rem 5rem" }}>
          <Flex w="full" justifyContent="space-between">
            <Box color="grey.200">Price per Serving:</Box>
            <Box>AED 8.99</Box>
          </Flex>
          <Flex w="full" justifyContent="space-between">
            <Box color="grey.200">Weekly Total:</Box>
            <Box>AED 19.99</Box>
          </Flex>
        </VStack>
      </Box>
    </Stack>
  );
};
export default CountSelectionGrid;
