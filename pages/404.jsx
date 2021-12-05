import React from "react";
import Image from "../components/Image";
import Button from "../components/Button";
import MyHead from "../components/MyHead";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notfound-page" data-scroll-section>
      {/* Head */}
      <MyHead title="Not Found page | TechIdle" />

      <section className="container">
        <Image src="svg/404.svg" alt="Not found" />
        <p className="description">This page is can not be reached!</p>
        <div className="cta">
          <Link href="/">
            <a>
              <Button
                text="Go back home"
                img="purple-arrow.png"
                align="reverse"
              />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
