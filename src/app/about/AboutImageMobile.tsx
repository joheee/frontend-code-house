import Image from "next/image";
import { AboutInterface } from "./interface";

export default function AboutImageMobile(about: AboutInterface) {
  return (
    <div
      className={`relative w-full h-clamp-about-image overflow-hidden ${about.className}`}
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
