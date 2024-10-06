"use client";

import Link from "next/link";
import {
  ABOUT_ID,
  CONTACT_ID,
  HOME_ID,
  SERVICE_ID,
  WORKS_ID,
} from "../config/variable";
import { handleSmoothScroll } from "../navigation/smoothScrool";

export default function FooterContent() {
  return (
    <>
      <Link
        onClick={(e) => handleSmoothScroll(e, HOME_ID)}
        href={`#${HOME_ID}`}
        className=""
      >
        Home
      </Link>
      <Link
        onClick={(e) => handleSmoothScroll(e, ABOUT_ID)}
        href={`#${ABOUT_ID}`}
        className=""
      >
        About us
      </Link>
      <Link
        onClick={(e) => handleSmoothScroll(e, WORKS_ID)}
        href={`#${WORKS_ID}`}
        className=""
      >
        Our works
      </Link>
      <Link
        onClick={(e) => handleSmoothScroll(e, SERVICE_ID)}
        href={`#${SERVICE_ID}`}
        className=""
      >
        Our services
      </Link>
      <Link
        onClick={(e) => handleSmoothScroll(e, CONTACT_ID)}
        href={`#${CONTACT_ID}`}
        className=""
      >
        Contact us
      </Link>
    </>
  );
}
