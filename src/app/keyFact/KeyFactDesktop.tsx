import { KeyFactInterface } from "./interface";
import KeyFactItem from "./KeyFactItem";

export default function KeyFactDesktop(keyFact: KeyFactInterface) {
  return (
    <div
      className={`${keyFact.className} flex justify-between gap-5 items-center`}
    >
      <div className="w-fit">
        <div className="font-extrabold text-clamp-about">GET AQUANTED WITH</div>
        <div className="font-extrabold text-clamp-about">OUR KEY FACTS</div>
      </div>
      <div className="flex gap-10">
        <KeyFactItem value="8.2" unit="k" text="Trusted Users" />
        <KeyFactItem value="120" unit="+" text="Project Completed" />
        <KeyFactItem value="97" unit="%" text="Clients Satisfaction" />
      </div>
    </div>
  );
}
