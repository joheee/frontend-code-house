import Image from "next/image";

export default function LandingDesktop() {
  return (
    <div className="">
      <Image
        className="z-0"
        src="/landing_background.png"
        alt="landing page background for Code House"
        layout="fill"
        quality={100}
        priority
      />
      <div className="z-10 flex flex-col items-center justify-center h-screen">
        <div className="flex gap-5 items-center">
          <div className="font-bold text-[65px]">WE ARE</div>
          <Image
            className="w-fit h-fit z-0"
            src="/landing_first_content.png"
            alt="landing page background for Code House"
            width={100}
            height={100}
            quality={100}
            priority
          />
          <div className="font-bold text-[65px]">SOFTWARE</div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="font-bold text-[65px]">HOUSE</div>
          <Image
            className="w-fit h-fit z-0"
            src="/landing_second_content.png"
            alt="landing page background for Code House"
            width={100}
            height={100}
            quality={100}
            priority
          />
        </div>
      </div>
    </div>
  );
}
