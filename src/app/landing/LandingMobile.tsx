import Image from "next/image";
import { LandingInterface } from "./interface";
import PaddingComponent from "../padding/PaddingComponent";

export default function LandingMobile(landing: LandingInterface) {
  return (
    <div
      className={`relative h-screen overflow-hidden w-full ${landing.className}`}
    >
      <Image
        className="z-0 absolute"
        src="/landing_background.png"
        alt="landing page background for Code House"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      <PaddingComponent className="relative z-10 flex flex-col items-center justify-center h-full from-background">
        <div className="flex gap-5 items-center">
          <div className="font-bold tracking-widest text-clamp-xl">WE ARE</div>
          <Image
            className="z-0"
            src="/landing_first_content.png"
            alt="landing first content for Code House"
            width={80} 
            height={80} 
            quality={100}
            priority
          />
        </div>
        <div className="font-bold text-clamp-xl tracking-widest">SOFTWARE</div>
        <div className="flex flex-col justify-center gap-5 items-center">
          <div className="font-extralight text-clamp-xl">HOUSE</div>
          <Image
            className="w-fit h-fit z-0"
            src="/landing_second_content.png"
            alt="landing second content for Code House"
            width={100}
            height={100}
            quality={100}
            priority
          />
          {/* <div className="tracking-widest font-light text-center">
            <div className="">Empowering businesses</div>
            <div className="">through Software</div>
          </div> */}
        </div>
        <div className="mt-14 text-lg flex flex-col items-center text-center">
          <div className="tracking-widest">
            We empower your business to thrive in the digital age
          </div>
          <div className="shadow-md hover:bg-accent_hover mt-5 hover:cursor-pointer bg-accent px-4 py-1 rounded-sm text-font_dark">
            Contact us
          </div>
        </div>
      </PaddingComponent>
    </div>
  );
}
