import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import Carousel from "../components/Carousel";
import ProductShow from "../components/ProductShow";
import Card from "../components/Card";
import { HERO, TRENDING, NEW, CARDS } from "../constants/home";

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
      {/* Customer feedback section */}
      <section className="customer-feedback">
        <SectionTitle text="our customers feedback" />
        <div className="cards container">
          {CARDS.map((item, index) => {
            return <Card data={item} number={index + 1} key={index} />;
          })}
        </div>
      </section>
    </div>
  );
}
