import React, { useState } from "react";

// context
import { useAppContext } from "Context";

// components
import SelectBox from "./_partials/SelectBox";
import SignUp from "./_partials/SignUp";
import Delivery from "./_partials/Delivery";
import ChooseRecipes from "./_partials/ChooseRecipes";
import Payment from "./_partials/Payment";

import {} from "Context";

interface Props {
  setMenuItems: (any) => void;
}

const GetStarted: React.FC<Props> = ({ setMenuItems }) => {
  const { currentGetStartedComponent } = useAppContext();

  switch (currentGetStartedComponent) {
    case "selectBox":
      return <SelectBox />;
    case "signUp":
      return <SignUp />;
    case "delivery":
      return <Delivery />;
    case "chooseRecipes":
      return <ChooseRecipes />;
    case "payment":
      return <Payment />;
  }
};

export default GetStarted;
