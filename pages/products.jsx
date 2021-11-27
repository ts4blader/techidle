import React from "react";
import Carousel from "../components/Carousel";
import ProductSection from "../components/ProductSection";
import { STANDOUT, PRODUCT } from "../constants/products";
import { PRODUCTS_CAROUSEL } from "../constants/carousel-options";

export default function Products() {
  return (
    <div className="products-page">
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
