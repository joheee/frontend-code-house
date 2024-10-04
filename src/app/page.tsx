import LandingComponent from "./landing/LandingComponent";
import NavigationComponent from "./navigation/NavigationComponent";

export default function Home() {
  return (
    <div>
      <NavigationComponent />
      <LandingComponent />
    </div>
  );
}
