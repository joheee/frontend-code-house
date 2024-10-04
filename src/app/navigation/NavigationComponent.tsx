import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

export default function NavigationComponent() {
  return (
    <div>
      <NavigationDesktop className="hidden tablet:flex" />
      <NavigationMobile className="block tablet:hidden" />
    </div>
  );
}
