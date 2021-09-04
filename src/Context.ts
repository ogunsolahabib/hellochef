import { createContext, useContext } from "react";

export type currentGetStartedComponentType =
  | "selectBox"
  | "signUp"
  | "delivery"
  | "chooseRecipes"
  | "payment";

export type AppContextType = {
  currentGetStartedComponent: currentGetStartedComponentType;
  setCurrentGetStartedComponent: (val: currentGetStartedComponentType) => void;
  activateMenuItem: (id: currentGetStartedComponentType) => void;
  peopleCount: number;
  setPeopleCount: (val: number) => void;
  recipeCount: number;
  setRecipeCount: (val: number) => void;
};
export const AppContext = createContext<AppContextType>({
  currentGetStartedComponent: "selectBox",
  setCurrentGetStartedComponent: () => {},
  activateMenuItem: () => {},
  peopleCount: 0,
  setPeopleCount: (val) => {},
  recipeCount: 0,
  setRecipeCount: (val) => {},
});

export const useAppContext = () => useContext(AppContext);
