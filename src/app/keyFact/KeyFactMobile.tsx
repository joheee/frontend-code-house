import { AboutInterface } from "../about/interface";
import KeyFactItem from "./KeyFactItem";

export default function KeyFactMobile(about: AboutInterface) {
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
        <KeyFactItem value="8.2" unit="k" text="Trusted Users" />
        <KeyFactItem value="120" unit="+" text="Project Completed" />
        <KeyFactItem value="97" unit="%" text="Clients Satisfaction" />
      </div>
    </div>
  );
}
