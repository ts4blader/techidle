import React from "react";
import Button from "./Button";

export default function Hero({ content, align }) {
  const { title, subtitle, cta, preview } = content;

  return (
    <section className="hero container" data-align={align}>
      <div className="hero__content">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <div className="cta">
          <Button text={cta} type="secondary" />
        </div>
      </div>
      <div className="hero__preview">{preview}</div>
    </section>
  );
}
