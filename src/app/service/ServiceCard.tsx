import { ServiceCardInterface } from "./interface";

export default function ServiceCard(prop: ServiceCardInterface) {
  return (
    <div className="bg-white rounded-sm shadow-md p-5 text-font_dark">
      <div className="text-clamp-service-card-title font-semibold">
        {prop.title}
      </div>
      <div className="">{prop.description}</div>
    </div>
  );
}
