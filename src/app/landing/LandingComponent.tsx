import { HOME_ID } from "../config/variable";
import LandingDesktop from "./LandingDesktop";
import LandingMobile from "./LandingMobile";

export default function LandingComponent() {
  return (
    <div id={HOME_ID}>
      <LandingDesktop className="hidden laptop:block" />
      <LandingMobile className="block laptop:hidden" />
    </div>
  );
}
