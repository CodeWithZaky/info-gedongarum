"use client";
import useDarkMode from "@/hooks/useDarkMode";
import { Switch } from "@nextui-org/react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function DarkModeSwitcher() {
  const { theme, toggleDarkMode } = useDarkMode();
  return (
    <Switch
      onChange={toggleDarkMode}
      defaultSelected
      size="lg"
      color="default"
      isSelected={theme === "dark" ? true : false}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <BsFillMoonFill className={className} />
        ) : (
          <BsFillSunFill className={className} />
        )
      }
    />
  );
}
