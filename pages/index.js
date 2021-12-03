import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import Carousel from "../components/Carousel";
import ProductShow from "../components/ProductShow";
import Card from "../components/Card";
import Image from "../components/Image";
import According from "../components/According";
import MyHead from "../components/MyHead";
import { HERO, TRENDING, NEW, CARDS, FAQ, PARTNERS } from "../constants/home";
import { HOME_CAROUSEL } from "../constants/carousel-options";

export default function Home() {
  return (
    <div className="home-page">
      {/* Head */}
      <MyHead />
      {/* Hero */}
      <Hero content={HERO} />
      {/* Trending section */}
      <section className="trending container">
        <SectionTitle text="trending" />
        <Carousel data={TRENDING} options={HOME_CAROUSEL} />
      </section>
      {/* New Product section */}
      <section className="new container">
        <SectionTitle text="new products" />
        <ProductShow data={NEW} />
      </section>
      {/* Customer feedback section */}
      <section className="customer-feedback container">
        <SectionTitle text="our customers feedback" />
        <div className="cards">
          {CARDS.map((item, index) => {
            return <Card data={item} number={index + 1} key={item.title} />;
          })}
        </div>
      </section>
      {/* FAQ section */}
      <section className="faq container">
        <SectionTitle text="frequently ask questions" />
        <div className="faqs">
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
      {/* Our partners section */}
      <section className="partners container">
        <SectionTitle text="our partners" />
        <div className="partners-wrapper">
          {PARTNERS.map((item) => {
            return (
              <a className="partner" key={item.name} href={item.url}>
                <Image src={`partners/${item.img}`} alt={item.name} />
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
