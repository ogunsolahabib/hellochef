import * as React from "react";

// third party libraries
import { ChakraProvider, Box } from "@chakra-ui/react";
import BaseLayout from "./components/BaseLayout";
import theme from "./theme";
import GetStarted from "pages/GetStarted";
import { AppContext } from "Context";

// styles
import "./App.scss";
import { useState } from "react";
import { BiCube } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { RiMenu2Line, RiMoneyDollarCircleLine } from "react-icons/ri";

declare const window;

export const App = () => {
  const [currentGetStartedComponent, setCurrentGetStartedComponent] = useState<
    "selectBox" | "signUp" | "delivery" | "chooseRecipes" | "payment"
  >("selectBox");

  const [menuItems, setMenuItems] = useState([
    {
      label: "Select your box",
      id: "selectBox",
      icon: BiCube,
      isActivated: true,
    },
    { label: "Sign up", id: "signUp", icon: BsPerson, isActivated: false },
    { label: "Delivery", id: "delivery", icon: FaTruck, isActivated: false },
    {
      label: "Choose Recipes",
      id: "chooseRecipes",
      icon: RiMenu2Line,
      isActivated: false,
    },
    {
      label: "Payment",
      id: "payment",
      icon: RiMoneyDollarCircleLine,
      isActivated: false,
    },
  ]);
  const [peopleCount, setPeopleCount] = useState(2);
  const [recipeCount, setRecipeCount] = useState(3);
  const activateMenuItem = (id: string) => {
    const menuItemsCopy: any[] = menuItems;
    const selected = menuItemsCopy.find((item) => item.id === id);
    const selectedIndex = menuItemsCopy.findIndex((item) => item.id === id);
    menuItemsCopy[selectedIndex] = {
      ...selected,
      isActivated: true,
    };

    setMenuItems(menuItemsCopy);
  };

  return (
    <AppContext.Provider
      value={{
        currentGetStartedComponent,
        setCurrentGetStartedComponent,
        activateMenuItem,
        peopleCount,
        setPeopleCount,
        recipeCount,
        setRecipeCount,
      }}
    >
      <ChakraProvider theme={theme}>
        <Box textAlign="center">
          <BaseLayout menuItems={menuItems} setMenuItems={setMenuItems}>
            <GetStarted setMenuItems={setMenuItems} />
          </BaseLayout>
        </Box>
      </ChakraProvider>
    </AppContext.Provider>
  );
};
