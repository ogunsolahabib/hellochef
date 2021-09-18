import React from "react";

// third party libraries
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  Stack,
  VStack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

// context
import { useAppContext } from "Context";
import { useEffect } from "react";
import { BiCheck, BiCheckCircle } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

const SignUp = () => {
  const { activateMenuItem, setCurrentGetStartedComponent } = useAppContext();
  const gridItems = [
    {
      label: "Convenience",
      icon: "",
      bullets: [
        "Stress-free meal planning with pre-measured ingredients and easy-to follow recipes",

        "Contactless, doorstep delivery across the UAE",
        "No commitment whatsoever, Skipping weeks or canceling is super easy",
      ],
    },
    {
      label: "Variety",
      icon: "",
      bullets: [
        "22 recipes per week from around the world",
        "Low-calorie & family-friendly options",
        "A mixture of new and customer-favourite recipes every week",
      ],
    },
    {
      label: "Delicioiusness",
      icon: "",
      bullets: [
        "Fresh ingredients from local, trusted suppliers",
        "100% satisfaction guarantee, or we will make it right",
        " No skimpin' on the chicken!Or steak, or fish, or plant protein",

        "Contactless, doorstep delivery across the UAE",
        "No commitment whatsoever, Skipping weeks or canceling is super easy",
      ],
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
            onClick={() => {
              setCurrentGetStartedComponent("delivery");
              activateMenuItem("delivery");
            }}
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
      <Stack direction={{ base: "column", md: "row" }} spacing="5rem">
        {gridItems.map(({ label, icon, bullets }) => (
          <Box
            w="full"
            borderRadius="1rem"
            boxShadow="0px 1px 3px rgba(0, 0, 0, 0.2)"
            p="2rem"
          >
            <Icon as={BiCheckCircle} w="5rem" h="5rem" color="brand.primary" />
            <Heading size="md" mt="1rem">
              {label}
            </Heading>
            <List>
              {bullets.map((bullet) => (
                <ListItem textAlign="left" mt="3rem" display="flex">
                  <ListIcon as={FaCheck} color="green" mr="1rem" /> {bullet}
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default SignUp;
