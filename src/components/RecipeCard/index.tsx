import React from "react";

import {
  Box,
  Container,
  Flex,
  Icon,
  Tag,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";

interface Props {
  name: string;
  description: string;
  image: string;
  energy: number;
  time: number;
  tags: number[];
}
const RecipeCard: React.FC<Props> = ({
  children,
  name,
  description,
  image,
  energy,
  time,
  tags,
}) => {
  const allTags = [
    { name: "Vegan", color: "red" },
    { name: "family friendly", color: "blue" },
    { name: "quick & easy", color: "green" },
    { name: "low carb", color: "yellow" },
    { name: "Lorem", color: "brown" },
    { name: "Ipsum", color: "grey" },
  ];

  return (
    <Box
      bg="white"
      h={{ md: "50rem", xl: "45rem" }}
      w={{ base: "100%", md: "47.5%", xl: "30%" }}
      minW={{ base: "100%", md: "47.5%", xl: "30%" }}
      borderRadius="5px"
      bgClip="padding-box"
    >
      <Box
        bg={`url(${image})`}
        bgSize="cover"
        bgPos="lef-top"
        w="full"
        h="20rem"
        borderTopLeftRadius="5px"
        borderTopRightRadius="5px"
      />
      <VStack textAlign="left" p="2rem" spacing="2rem">
        <Box maxH="4rem" size="sm" fontSize="1.8rem" textOverflow="ellipsis">
          {name}
        </Box>
        <Box color="grey.200">{description} </Box>
        <Flex w="full" justifyContent="space-between">
          <Box minW="10rem" mr="1rem" fontSize="1.2rem">
            <Box>{energy} Calories</Box>
            <Flex alignItems="center">
              <Icon as={BsClock} mr="5px" /> {time} mins
            </Flex>
          </Box>
          <Wrap spacing="5px">
            {tags.map((id) => {
              const tag = allTags[id] || allTags[0];
              return (
                <WrapItem key={id}>
                  <Tag
                    d="inline-block"
                    bg={tag.color}
                    w="fit-content"
                    minW="8rem"
                    minH="2.5rem"
                    lineHeight="2.5rem"
                    fontSize="1.2rem"
                    textTransform="capitalize"
                    textAlign="center"
                  >
                    {tag.name}
                  </Tag>
                </WrapItem>
              );
            })}
          </Wrap>
        </Flex>
      </VStack>
    </Box>
  );
};

export default RecipeCard;
