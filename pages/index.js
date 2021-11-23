import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import Carousel from "../components/Carousel";
import ProductShow from "../components/ProductShow";
import { HERO, TRENDING, NEW } from "../constants/home";

export default function Home() {
  return (
    <div className="home-page">
      <Hero content={HERO} />
      {/* Trending section */}
      <section className="trending">
        <SectionTitle text="trending" />
        <Carousel data={TRENDING} />
      </section>
      {/* New Product section */}
      <section className="new">
        <SectionTitle text="new products" />
        <ProductShow data={NEW} />
      </section>
    </div>
  );
}
