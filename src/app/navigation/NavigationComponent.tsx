import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

export default function NavigationComponent() {
  return (
    <div className="absolute top-0 left-0 w-screen z-20 select-none">
      <NavigationDesktop className="hidden tablet:flex" />
      <NavigationMobile className="block tablet:hidden" />
    </div>
  );
}
