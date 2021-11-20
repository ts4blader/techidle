import Nav from "../components/Nav";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { HERO } from "../constants/home";

export default function Home() {
  return (
    <div className="home-page">
      <Nav />
      <Hero content={HERO} />
      {/* Trending section */}
      <SectionTitle text="trending" />
    </div>
  );
}
