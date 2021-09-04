// theme.js
import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Component style overrides
import Button from "./components/button";
import Input from "./components/input";
// import Link from "./components/link";
// import Heading from "./components/heading";
// import Select from "./components/select";
// import Modal from "./components/modal";
// import Tabs from "./components/tabs";
// import Tooltip from "./components/tooltip";

// Foundational style overrides

const overrides = {
  ...styles,
  // Other foundational style overrides go here
  components: {
    Button,
    // Link,
    // Heading,
    Input,
    // Select,
    // Modal,
    // Tabs,
    // NumberInput: Input,
    // Tooltip,
    // Checkbox: {
    //   baseStyle: {
    //     control: {
    //       borderRadius: ".3rem",
    //     },
    //   },
    // },
    // Flex: {
    //   baseStyle: {
    //     ">*": {
    //       width: "100%",
    //     },
    //   },
    // },
    // Stack: {
    //   baseStyle: {
    //     ">*": {
    //       width: "100%",
    //     },
    //   },
    // },
    // Other components go here
  },
};

export default extendTheme(overrides);
