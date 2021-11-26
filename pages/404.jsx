import React from "react";
import Image from "../components/Image";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="notfound-page">
      <section className="container">
        <Image src="svg/404.svg" alt="Not found" />
        <p className="description">This page is can not be reached!</p>
        <div className="cta">
          <Button
            text="Go back home"
            link="/"
            img="purple-arrow.png"
            align="reverse"
          />
        </div>
      </section>
    </div>
  );
}
