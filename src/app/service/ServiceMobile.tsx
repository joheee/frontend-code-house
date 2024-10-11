import { ServiceInterface } from "./interface";
import ServiceContent from "./ServiceContent";

export default function ServiceMobile(prop: ServiceInterface) {
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
      <div className="grid grid-cols-1 gap-5">
        <ServiceContent />
      </div>
    </div>
  );
}
