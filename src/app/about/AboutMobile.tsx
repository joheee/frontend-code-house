import AboutContent from "./AboutContent";
import { AboutInterface } from "./interface";

export default function AboutMobile(about: AboutInterface) {
  return (
    <div className={`${about.className} grid items-center`}>
      <div className="">
        <div className="font-extrabold text-clamp-xl">ABOUT THE</div>
        <div className="font-extrabold text-clamp-xl">CODE HOUSE</div>
      </div>
      <AboutContent />
    </div>
  );
}
