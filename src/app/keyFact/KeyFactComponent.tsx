"use client"
import PaddingComponent from "../padding/PaddingComponent";
import KeyFactDesktop from "./KeyFactDesktop";
import KeyFactMobile from "./KeyFactMobile";

export default function KeyFactComponent() {
  return (
    <PaddingComponent className="py-20">
      <KeyFactDesktop className="hidden laptop:flex" />
      <KeyFactMobile className="block laptop:hidden" />
    </PaddingComponent>
  );
}
