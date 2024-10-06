"use client";
import PaddingComponent from "../padding/PaddingComponent";
import ContactDesktop from "./ContactDesktop";
import ContactMobile from "./ContactMobile";

export default function ContactComponent() {
  return (
    <PaddingComponent className="py-20">
      <ContactDesktop className="hidden tablet:grid w-full" />
      <ContactMobile className="block tablet:hidden w-full" />
    </PaddingComponent>
  );
}
