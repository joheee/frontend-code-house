"use client";
import { useState } from "react";
import { NavigationInterface } from "./interface";
import NavigationContent from "./NavigationContent";

export default function NavigationMobile(navigation: NavigationInterface) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex justify-between items-center py-5 px-10 text-md ${navigation.className}`}
    >
      <div className="font-bold">Code House</div>

      <div className="relative">
        <div
          className="shadow-md hover:bg-accent_hover hover:cursor-pointer bg-accent px-4 py-1 rounded-sm text-font_dark"
          onClick={toggleMenu}
        >
          ☰
        </div>

        <div
          className={`absolute mt-2 right-0 bg-white shadow-md flex flex-col p-2 gap-2 rounded-sm transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 max-h-60" : "opacity-0 max-h-0"
          }`}
          style={{ overflow: "hidden" }}
        >
          <NavigationContent />
        </div>
      </div>
    </div>
  );
}
