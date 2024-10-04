import Image from "next/image";

export default function LandingDesktop() {
  return (
    <div className="">
      <Image
        src="/landing_background.png"
        alt="bla bla"
        layout="fill" 
        quality={100} 
        priority 
      />
    </div>
  );
}
