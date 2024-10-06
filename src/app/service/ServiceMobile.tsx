import { ServiceInterface } from "./interface";
import ServiceCard from "./ServiceCard";

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
        <ServiceCard
          title="Consulting"
          description="
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere illum sunt quidem eaque explicabo molestiae, a sint, in ipsam excepturi saepe nostrum possimus, maxime molestias veniam commodi aperiam modi. Eum!
        "
        />
        <ServiceCard
          title="Consulting"
          description="
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere illum sunt quidem eaque explicabo molestiae, a sint, in ipsam excepturi saepe nostrum possimus, maxime molestias veniam commodi aperiam modi. Eum!
        "
        />
        <ServiceCard
          title="Consulting"
          description="
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere illum sunt quidem eaque explicabo molestiae, a sint, in ipsam excepturi saepe nostrum possimus, maxime molestias veniam commodi aperiam modi. Eum!
        "
        />
      </div>
    </div>
  );
}
