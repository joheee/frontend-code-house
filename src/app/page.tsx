import AboutComponent from "./about/AboutComponent";
import FooterComponent from "./footer/FooterComponent";
import LandingComponent from "./landing/LandingComponent";
import NavigationComponent from "./navigation/NavigationComponent";

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      <NavigationComponent />
      <LandingComponent />
      <AboutComponent />
      <FooterComponent />
    </div>
  );
}
