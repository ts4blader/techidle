import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import ProductSection from "../components/ProductSection";
import MyHead from "../components/MyHead";
import { STANDOUT, PRODUCT } from "../constants/products";
import { PRODUCTS_CAROUSEL } from "../constants/carousel-options";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useStore } from "../store/Store";

export default function Products() {
  const [state, dispatch] = useStore();
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    setTimeout(() => {
      scroll?.scrollTo(`#${state.productSection}`);
    }, 200);
  }, [state, scroll]);

  return (
    <div className="products-page" data-scroll-section>
      {/* Head */}
      <MyHead title="Products | TechIdle" />

      {/* Stand out section  */}
      <section className="stand-out">
        <div className="title">Stand Out</div>
        <Carousel data={STANDOUT} options={PRODUCTS_CAROUSEL} />
      </section>
      {/* MI section  */}
      <ProductSection title="mi" data={PRODUCT.MI} />
      {/* REDMI section  */}
      <ProductSection title="redmi" data={PRODUCT.REDMI} />
      {/* POCO section  */}
      <ProductSection title="poco" data={PRODUCT.POCO} />
      {/* OTHER section  */}
      <ProductSection title="others" data={PRODUCT.OTHER} />
    </div>
  );
}
