import React from "react";
import Link from "next/link";
import { CATEGORIES, SOCIAL, PARTNERS } from "../constants/footer";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          {/* Pillars  */}
          <div className="pillars">
            <ul className="pillar">
              <div className="title">categories</div>
              {CATEGORIES.map((item) => (
                <li key={item + "footer"}>
                  <Link href="/products">{item}</Link>
                </li>
              ))}
            </ul>
            <ul className="pillar">
              <div className="title">social</div>
              {SOCIAL.map((item) => (
                <li key={item.name + "footer"}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
            <ul className="pillar">
              <div className="title">partners</div>
              {PARTNERS.map((item) => (
                <li key={item.name + "footer"}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Rive animation  */}
          <div className="rive-animation"></div>
        </div>
        <div className="footer__foot">
          <p className="copyright">@TechIdle Vietnam 2021</p>
          <p className="creator">Designed by Tristin Tran</p>
        </div>
      </div>
    </footer>
  );
}
