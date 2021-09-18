import React from "react";

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import { useAppContext } from "Context";

interface Props {
  menuItems: any[];
  setMenuItems: (items: any[]) => void;
}

const Navbar: React.FC<Props> = ({ menuItems }) => {
  const { setCurrentGetStartedComponent } = useAppContext();

  return (
    <Box as="nav" p="2rem 5vw" pos="relative" bg="white">
      <Heading className="logo" pos={{ base: "static", xl: "absolute" }}>
        <Image
          src="https://res.cloudinary.com/hellochef/image/upload/v1622433161/website/hc2_logo.png"
          h="5rem"
          w="auto"
        />
      </Heading>
      <HStack
        as="ul"
        listStyleType="none"
        fontWeight="500"
        spacing="6rem"
        w="fit-content"
        h="5rem"
        m="auto"
        d={{ base: "none", md: "flex" }}
      >
        {menuItems.map(({ label, icon, isActivated, id }, i) => (
          <Button
            variant="unstyled"
            key={i}
            onClick={() => setCurrentGetStartedComponent(id)}
            disabled={!isActivated}
            _focus={{ outline: "none" }}
          >
            <HStack
              pos="relative"
              as="li"
              textTransform="capitalize"
              _before={
                i
                  ? {
                      content: `""`,
                      display: "block",
                      w: { base: "1rem", md: "2rem", lg: "3rem" },
                      h: "2px",
                      pos: "absolute",
                      left: { base: "-2rem", md: "-4rem", lg: "-4.5rem" },
                      top: "50%",
                      bottom: "50%",
                      bg: isActivated ? "brand.primary" : "grey.200",
                    }
                  : undefined
              }
              color={isActivated ? "brand.primary" : "grey.200"}
            >
              <Icon
                as={icon}
                color={isActivated ? "brand.primary" : "grey.200"}
                h={{ base: "3rem", xl: "1.6rem" }}
                w={{ base: "3rem", xl: "1.6rem" }}
              />{" "}
              <Box display={{ base: "none", lg: "block" }}>{label}</Box>
            </HStack>
          </Button>
        ))}
      </HStack>
    </Box>
  );
};
export default Navbar;
