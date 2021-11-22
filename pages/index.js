import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import Carousel from "../components/Carousel";
import { HERO, TRENDING } from "../constants/home";

export default function Home() {
  return (
    <div className="home-page">
      <Hero content={HERO} />
      {/* Trending section */}
      <SectionTitle text="trending" />
      <Carousel data={TRENDING} />
    </div>
  );
}
