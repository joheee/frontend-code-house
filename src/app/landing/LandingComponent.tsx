import LandingDesktop from "./LandingDesktop";
import LandingMobile from "./LandingMobile";

export default function LandingComponent() {
  return (
    <div>
      <LandingDesktop className="hidden laptop:block" />
      <LandingMobile className="block laptop:hidden" />
    </div>
  );
}
