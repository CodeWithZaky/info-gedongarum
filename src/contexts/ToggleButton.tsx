"use client";
import { createContext, useState, FC, ReactNode } from "react";

interface ToggleContextType {
  isToggled: boolean;
  toggle: () => void;
}

const ToggleContext = createContext<ToggleContextType>({} as ToggleContextType);

const ToggleButtonProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  const toggle = () => setIsToggled((prevIsToggled) => !prevIsToggled);

  return (
    <ToggleContext.Provider value={{ isToggled, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export { ToggleButtonProvider, ToggleContext };
