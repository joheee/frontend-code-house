import { HoverEffect } from "../config/HoverEffect";
import { ServiceCardInterface } from "./interface";

export default function ServiceCard(prop: ServiceCardInterface) {
  return (
    <div
      className={`p-6 text-font_dark bg-gradient-to-b from-gray-50 to-white rounded-lg shadow-lg ${HoverEffect}`}
    >
      <div className="text-clamp-service-card-title font-bold mb-2 text-gray-800">
        {prop.title}
      </div>
      <div className="text-xl text-gray-600">{prop.description}</div>
    </div>
  );
}
