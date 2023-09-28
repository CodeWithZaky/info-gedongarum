"use client";
import { createContext, useState } from "react";

interface ToggleType {
  isToggled: boolean;
  toggleFn: () => void;
}

const ToggleContext = createContext<ToggleType>({} as ToggleType);

const ToggleButtonProvider = ({ children }: { children: React.ReactNode }) => {
  const [isToggled, setIsToggled] = useState(false);
  const toggleFn = () => {
    setIsToggled(!isToggled);
  };
  return (
    <ToggleContext.Provider value={{ isToggled, toggleFn }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleButtonProvider;
export { ToggleContext };
