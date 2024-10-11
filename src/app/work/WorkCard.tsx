import Image from "next/image";
import { WorkCardInterface } from "./interface";

export default function WorkCard(prop: WorkCardInterface) {
  return (
    <div className="hover:scale-95 transition-all duration-300 ease-in-out">
      <Image
        alt={prop.alt}
        src={prop.src}
        className="w-full rounded-sm shadow-md"
        width={1000}
        height={0}
      />
      <div className="mt-2 text-clamp-about-key-fact-mobile font-extrabold">
        {prop.title}
      </div>
      <div className="">{prop.subtitle}</div>
    </div>
  );
}
