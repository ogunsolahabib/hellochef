import React from "react";

// third party libraries
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";

// context
import { useAppContext } from "Context";
import { useEffect } from "react";

const SignUp = () => {
  const { activateMenuItem, setCurrentGetStartedComponent } = useAppContext();
  useEffect(() => {
    activateMenuItem("signUp");
  }, []);

  const gridItems = [
    {
      label: "convenience",
      icon: "",
    },
  ];
  return (
    <Box>
      <Heading size="xl">Let's Get Started</Heading>
      <Flex justifyContent="center" alignItems="center" mt="5rem">
        <Image
          src={`images/plate_of_food.png`}
          borderRadius="50%"
          display={{ base: "none", lg: "block" }}
          mr="5rem"
          w={{ lg: "40rem" }}
        />

        <VStack
          spacing="3rem"
          bg="white"
          border="1px solid"
          borderColor="grey.25"
          p={{ base: "2rem", lg: "5rem" }}
        >
          <Stack spacing="3rem" direction={["column", "row"]}>
            <Input placeholder="First name" size="lg" />
            <Input placeholder="Last name" size="lg" />
          </Stack>
          <Input placeholder="Email Address" size="lg" />
          <Input type="password" placeholder="Email Address" size="lg" />
          <Button
            variant="solid"
            w="full"
            onClick={() => setCurrentGetStartedComponent("delivery")}
          >
            Continue
          </Button>
        </VStack>
      </Flex>
      <Divider
        m="10rem 0"
        colorScheme="black"
        variant="dashed"
        borderBottom="1px solid"
        borderBottomColor="grey.100"
      />
    </Box>
  );
};

export default SignUp;
