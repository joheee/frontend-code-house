"use client";

import Link from "next/link";
import { NavigationInterface } from "./interface";
import NavigationContent from "./NavigationContent";
import { CONTACT_ID } from "../config/variable";
import { handleSmoothScroll } from "./smoothScrool";

export default function NavigationDesktop(navigation: NavigationInterface) {
  return (
    <div
      className={`flex justify-between items-center py-5 px-10 text-md ${navigation.className}`}
    >
      <div className="font-bold">Code House</div>
      <div className="bg-white shadow-md flex p-2 gap-2 rounded-sm">
        <NavigationContent />
      </div>
      <Link
        href={`#${CONTACT_ID}`}
        onClick={(e) => handleSmoothScroll(e, CONTACT_ID)}
        className="shadow-md hover:bg-accent_hover hover:cursor-pointer bg-accent px-4 py-1 rounded-sm text-font_dark"
      >
        Get in touch
      </Link>
    </div>
  );
}
