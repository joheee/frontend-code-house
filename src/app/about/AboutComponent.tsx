import PaddingComponent from "../padding/PaddingComponent";
import AboutDesktop from "./AboutDesktop";
import AboutMobile from "./AboutMobile";

export default function AboutComponent() {
  return (
    <div>
      <PaddingComponent className="py-10">
        <AboutDesktop className="hidden tablet:grid" />
        <AboutMobile className="block tablet:hidden" />
      </PaddingComponent>
    </div>
  );
}
