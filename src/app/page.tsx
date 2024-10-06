import AboutComponent from "./about/AboutComponent";
import FooterComponent from "./footer/FooterComponent";
import KeyFactComponent from "./keyFact/KeyFactComponent";
import LandingComponent from "./landing/LandingComponent";
import NavigationComponent from "./navigation/NavigationComponent";
import ServiceComponent from "./service/ServiceComponent";
import WorkComponent from "./work/WorkComponent";

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      <NavigationComponent />
      <LandingComponent />
      <AboutComponent />
      <KeyFactComponent />
      <WorkComponent />
      <ServiceComponent/>
      <FooterComponent />
    </div>
  );
}
