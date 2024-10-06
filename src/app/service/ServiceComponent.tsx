import { SERVICE_ID } from "../config/variable";
import PaddingComponent from "../padding/PaddingComponent";
import ServiceDesktop from "./ServiceDesktop";
import ServiceMobile from "./ServiceMobile";

export default function ServiceComponent() {
  return (
    <PaddingComponent id={SERVICE_ID} className="py-20">
      <ServiceDesktop className="hidden laptop:grid" />
      <ServiceMobile className="block laptop:hidden" />
    </PaddingComponent>
  );
}
