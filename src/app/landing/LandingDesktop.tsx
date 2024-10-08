"use client";

import Image from "next/image";
import { LandingInterface } from "./interface";
import Link from "next/link";
import { CONTACT_ID } from "../config/variable";
import { handleSmoothScroll } from "../navigation/smoothScrool";

export default function LandingDesktop(landing: LandingInterface) {
  return (
    <div
      className={`relative h-screen overflow-hidden w-full ${landing.className}`}
    >
      <Image
        className="z-0 absolute"
        src="/landing_background.png"
        alt="landing page background for Code House"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-gradient-to-t from-background">
        <div className="flex gap-5 items-center">
          <div className="font-extrabold text-[65px] tracking-widest">
            WE ARE
          </div>
          <Image
            className="w-fit h-fit z-0"
            src="/landing_first_content.png"
            alt="landing first content for Code House"
            width={100}
            height={100}
            quality={100}
            priority
          />
          <div className="font-extrabold text-[65px] tracking-widest">
            SOFTWARE
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="font-extralight text-[65px]">HOUSE</div>
          <Image
            className="w-fit h-fit z-0"
            src="/landing_second_content.png"
            alt="landing second content for Code House"
            width={100}
            height={100}
            quality={100}
            priority
          />
          <div className="tracking-widest">
            <div className="">Enhancing businesses</div>
            <div className="">through Software</div>
          </div>
        </div>
        <div className="mt-10 text-lg flex flex-col items-center">
          <div className="tracking-widest">
            We empower your business to thrive in the digital age
          </div>
          <Link
            href={`#${CONTACT_ID}`}
            onClick={(e) => handleSmoothScroll(e, CONTACT_ID)}
            className="shadow-md mt-5 hover:bg-accent_hover hover:cursor-pointer bg-accent px-4 py-1 rounded-sm text-font_dark"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
