"use client";

import {
  ABOUT_ID,
  CONTACT_ID,
  HOME_ID,
  SERVICE_ID,
  WORKS_ID,
} from "../config/variable";
import { handleSmoothScroll } from "./smoothScrool";

export default function NavigationContent() {
  return (
    <>
      <a
        href={`#${HOME_ID}`}
        onClick={(e) => handleSmoothScroll(e, HOME_ID)}
        className="cursor-pointer hover:bg-accent px-4 py-1 rounded-sm text-font_dark"
      >
        Home
      </a>
      <a
        href={`#${ABOUT_ID}`}
        onClick={(e) => handleSmoothScroll(e, ABOUT_ID)}
        className="cursor-pointer hover:bg-accent px-4 py-1 rounded-sm text-font_dark"
      >
        About
      </a>
      <a
        href={`#${WORKS_ID}`}
        onClick={(e) => handleSmoothScroll(e, WORKS_ID)}
        className="cursor-pointer hover:bg-accent px-4 py-1 rounded-sm text-font_dark"
      >
        Works
      </a>
      <a
        href={`#${SERVICE_ID}`}
        onClick={(e) => handleSmoothScroll(e, SERVICE_ID)}
        className="cursor-pointer hover:bg-accent px-4 py-1 rounded-sm text-font_dark"
      >
        Services
      </a>
      <a
        href={`#${CONTACT_ID}`}
        onClick={(e) => handleSmoothScroll(e, CONTACT_ID)}
        className="cursor-pointer hover:bg-accent px-4 py-1 rounded-sm text-font_dark"
      >
        Contact
      </a>
    </>
  );
}
