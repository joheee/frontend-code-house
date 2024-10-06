"use client";
import { CONTACT_ID } from "../config/variable";
import PaddingComponent from "../padding/PaddingComponent";
import ContactDesktop from "./ContactDesktop";
import ContactMobile from "./ContactMobile";

export default function ContactComponent() {
  return (
    <PaddingComponent id={CONTACT_ID} className="py-20">
      <ContactDesktop className="hidden tablet:grid w-full" />
      <ContactMobile className="block tablet:hidden w-full" />
    </PaddingComponent>
  );
}
