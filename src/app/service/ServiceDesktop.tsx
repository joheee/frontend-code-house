import { ServiceInterface } from "./interface";
import ServiceContent from "./ServiceContent";

export default function ServiceDesktop(prop: ServiceInterface) {
  return (
    <div className={`${prop.className} grid-cols-[1fr_2fr] gap-10`}>
      <div className="">
        <div className="text-clamp-about font-extrabold text-start">
          KNOW OUR
        </div>
        <div className="text-clamp-about font-extrabold text-start">
          SERVICES
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <ServiceContent />
      </div>
    </div>
  );
}
