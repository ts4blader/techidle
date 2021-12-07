import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";

export default function Hero({ content, align }) {
  const { title, subtitle, cta, preview } = content;
  const router = useRouter();
  return (
    <section className="hero container" data-align={align}>
      <div className="hero__content">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <div className="cta" onClick={() => router.push(cta.url)}>
          <Button text={cta.text} type="secondary" />
        </div>
      </div>
      <div className="hero__preview">
        {preview?.map((item, index) => {
          let bg = {
            backgroundImage: `url('/images/thumbnail/${item}')`,
            backgroundSize: "cover",
          };
          return (
            <div className={`item item-${index}`} key={item} style={bg}></div>
          );
        })}
      </div>
    </section>
  );
}
