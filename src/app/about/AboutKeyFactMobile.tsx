import AboutKeyFactItem from "../keyFact/KeyFactItem";
import { AboutInterface } from "./interface";

export default function AboutKeyFactMobile(about: AboutInterface) {
  return (
    <div className={`${about.className} grid gap-5`}>
      <div className="w-fit">
        <div className="font-extrabold text-clamp-about-key-fact-mobile">
          GET AQUANTED WITH
        </div>
        <div className="font-extrabold text-clamp-about-key-fact-mobile">
          OUR KEY FACTS
        </div>
      </div>
      <div className="flex gap-8">
        <AboutKeyFactItem value="8.2" unit="k" text="Trusted Users" />
        <AboutKeyFactItem value="120" unit="+" text="Project Completed" />
        <AboutKeyFactItem value="97" unit="%" text="Clients Satisfaction" />
      </div>
    </div>
  );
}
