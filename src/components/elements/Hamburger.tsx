"use client";
import { ToggleContext } from "@/contexts/ToggleButton";
import { useContext } from "react";
import { MdOutlineMenu } from "react-icons/md";

const Hamburger = () => {
  const { toggleFn } = useContext(ToggleContext);
  return (
    <div className="md:hidden flex cursor-pointer">
      <MdOutlineMenu
        onClick={toggleFn}
        className="text-4xl dark:text-slate-300"
      />
    </div>
  );
};

export default Hamburger;
