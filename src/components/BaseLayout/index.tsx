import React, { useState } from "react";

import { Box } from "@chakra-ui/react";
import Navbar from "components/Navbar";

interface Props {
  menuItems: any[];
  setMenuItems: (items: any[]) => void;
}
const BaseLayout: React.FC<Props> = ({ menuItems, setMenuItems, children }) => {
  return (
    <Box bg="grey.25" minH="100vh" color="black">
      <Navbar menuItems={menuItems} setMenuItems={setMenuItems} />
      <Box p={{ base: "2rem", lg: "5rem", xl: "5rem 15rem" }}>{children}</Box>
    </Box>
  );
};
export default BaseLayout;
