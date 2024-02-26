import { createContext } from "react";

type InputProps = {
  showInput: boolean;
  showDropMenu: boolean;
  openCloseInput: () => void;
  openCloseDropDown: () => void;
  closeSameFunction: () => void;
};

export const MyContext = createContext<InputProps>(
  null as unknown as InputProps
);
