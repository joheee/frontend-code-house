import AboutContent from "./AboutContent";
import { AboutInterface } from "./interface";

export default function AboutDesktop(about: AboutInterface) {
  return (
    <div className={`${about.className} grid grid-cols-2 items-center`}>
      <div className="">
        <div className="font-extrabold text-[50px]">ABOUT THE</div>
        <div className="font-extrabold text-[50px]">CODE HOUSE</div>
      </div>
      <AboutContent />
    </div>
  );
}
