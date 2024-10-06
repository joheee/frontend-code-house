"use client";
import { ABOUT_ID } from "../config/variable";
import PaddingComponent from "../padding/PaddingComponent";
import AboutDesktop from "./AboutDesktop";
import AboutImageDesktop from "./AboutImageDesktop";
import AboutImageMobile from "./AboutImageMobile";
import AboutMobile from "./AboutMobile";

export default function AboutComponent() {
  return (
    <div id={ABOUT_ID}>
      <PaddingComponent className="py-20">
        <AboutDesktop className="hidden tablet:grid" />
        <AboutMobile className="block tablet:hidden" />
      </PaddingComponent>
      <AboutImageDesktop className="hidden tablet:grid" />
      <AboutImageMobile className="block tablet:hidden" />
    </div>
  );
}
