import React from "react";
import Carousel from "../components/Carousel";
import { STANDOUT } from "../constants/products";
import { PRODUCTS_CAROUSEL } from "../constants/carousel-options";

export default function Products() {
  return (
    <div className="products-page">
      {/* Stand out section  */}
      <section className="stand-out">
        <div className="title">Stand Out</div>
        <Carousel data={STANDOUT} options={PRODUCTS_CAROUSEL} />
      </section>
    </div>
  );
}
