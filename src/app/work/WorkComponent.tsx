import PaddingComponent from "../padding/PaddingComponent";
import WorkDesktop from "./WorkDesktop";
import WorkMobile from "./WorkMobile";

export default function WorkComponent() {
  return (
    <PaddingComponent className="py-10">
      <WorkDesktop className="hidden tablet:grid" />
      <WorkMobile className="block tablet:hidden" />
    </PaddingComponent>
  );
}
