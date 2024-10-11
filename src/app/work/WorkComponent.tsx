"use client"
import { WORKS_ID } from "../config/variable";
import PaddingComponent from "../padding/PaddingComponent";
import WorkDesktop from "./WorkDesktop";
import WorkMobile from "./WorkMobile";

export default function WorkComponent() {
  return (
    <PaddingComponent id={WORKS_ID} className="py-20">
      <WorkDesktop className="hidden tablet:grid" />
      <WorkMobile className="block tablet:hidden" />
    </PaddingComponent>
  );
}
