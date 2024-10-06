import Image from "next/image";
import { AboutInterface } from "./interface";

export default function AboutImageDesktop(about: AboutInterface) {
  return (
    <div
      className={`relative w-full h-[800px] overflow-hidden ${about.className}`}
    >
      <Image
        className="absolute top-[-100px]"
        src="/about_content.jpg"
        alt="about for Code House"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        priority
        quality={100}
      />
    </div>
  );
}
