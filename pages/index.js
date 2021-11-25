import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import Carousel from "../components/Carousel";
import ProductShow from "../components/ProductShow";
import Card from "../components/Card";
import According from "../components/According";
import { HERO, TRENDING, NEW, CARDS, FAQ } from "../constants/home";

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
            return <Card data={item} number={index + 1} key={item.title} />;
          })}
        </div>
      </section>
      {/* FAQ section */}
      <section className="faq">
        <SectionTitle text="frequently ask questions" />
        <div className="faqs container">
          <div className="col">
            {FAQ.slice(0, 5).map((item) => {
              return <According data={item} key={item.question} />;
            })}
          </div>
          <div className="col">
            {FAQ.slice(5, 10).map((item) => {
              return <According data={item} key={item.question} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
