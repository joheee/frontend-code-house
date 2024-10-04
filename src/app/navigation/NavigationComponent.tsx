import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

export default function NavigationComponent() {
  return (
    <div className="fixed w-screen z-20 select-none">
      <NavigationDesktop className="hidden tablet:flex" />
      <NavigationMobile className="block tablet:hidden" />
    </div>
  );
}
