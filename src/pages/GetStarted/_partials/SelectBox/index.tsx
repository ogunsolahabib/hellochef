import React from "react";

import { Box, Button, Center, Heading } from "@chakra-ui/react";
import CountSelectionGrid from "../CountsSelectionGrid";
import RecipeListSlider from "../RecipeListSlider";
import homePageRecipeList from "utils/homePageRecipeList";
import { AppContext, useAppContext } from "Context";

interface Props {}
const SelectBox: React.FC<Props> = ({}) => {
  const { setCurrentGetStartedComponent } = useAppContext();
  return (
    <>
      <Heading size="xl">Personalise Your Box</Heading>
      <CountSelectionGrid />
      <Center mt="5rem">
        <Button
          variant="solid"
          size="md"
          onClick={() => {
            setCurrentGetStartedComponent("signUp");
          }}
        >
          Select Meal Plan
        </Button>
      </Center>
      <Box mt="5rem" textAlign="center">
        Each week you can curate your personal menu and select from{" "}
        <Box as="strong">22 delicious recipes</Box>
      </Box>
      <Heading size="xl" mt="10rem">
        Menu for 4 Feb - 10 Feb
      </Heading>
      <Heading size="sm" color="grey.200" mt="2rem">
        Simply choose recipes before payment
      </Heading>

      <RecipeListSlider pageRecipeList={homePageRecipeList} />
    </>
  );
};

export default SelectBox;
