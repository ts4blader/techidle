import Nav from "../components/Nav";
import Hero from "../components/Hero";
import { HOME_HERO } from "../constants/hero";

export default function Home() {
  return (
    <div className="home-page">
      <Nav />
      <Hero content={HOME_HERO} />
    </div>
  );
}
