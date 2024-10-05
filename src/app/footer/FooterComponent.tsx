import PaddingComponent from "../padding/PaddingComponent";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

export default function FooterComponent() {
  return (
    <PaddingComponent className="py-10">
      <FooterDesktop className="hidden tablet:block" />
      <FooterMobile className="block tablet:hidden" />
    </PaddingComponent>
  );
}
