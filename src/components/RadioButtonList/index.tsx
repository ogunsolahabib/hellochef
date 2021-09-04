import React from "react";
import { Button, ButtonProps, SimpleGrid } from "@chakra-ui/react";

const RadioButtonList = ({ options, currentValue, setFunction }) => {
  return (
    <SimpleGrid spacing={0} position="relative" columns={3} alignItems="center">
      {options.map((option: number, i) => {
        const checked = option === currentValue;
        const firstButtonProps: ButtonProps = {
          border: "1px solid",
          borderRight: "none",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
        };
        const secondButtonProps: ButtonProps = {
          border: "1px solid",
        };
        const thirdButtonProps: ButtonProps = {
          border: "1px solid",
          borderLeft: "none",
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
        };
        return (
          <Button
            variant="unstyled"
            key={option}
            onClick={() => setFunction(option)}
            bg={checked ? "brand.primary" : "white"}
            color={checked ? "white" : "black"}
            border={checked ? "1rem solid" : "none"}
            borderRadius={checked ? "5px" : "0"}
            borderColor={checked ? "brand.primary" : "grey.50"}
            boxSizing="content-box"
            h={checked ? "5rem" : "4.6rem"}
            {...(i === 0
              ? firstButtonProps
              : i === 1
              ? secondButtonProps
              : thirdButtonProps)}
            _focus={{ outline: "none" }}
          >
            {option}
          </Button>
        );
      })}
    </SimpleGrid>
  );
};

export default RadioButtonList;
