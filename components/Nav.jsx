import React, { useState } from "react";
import Icon from "./Icon";
import { CATEGORIES } from "../constants/base";
import Button from "./Button";
import Link from "next/link";

export default function Nav() {
  const [show, setShow] = useState(false);

  return (
    <nav className="nav" data-show={show}>
      <div className="nav__logo">
        <Link href="/">
          <a>
            <Icon src="logo.png" alt="logo" />
          </a>
        </Link>
      </div>
      <div className="nav__hamburger hide" onClick={() => setShow(true)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="nav__right">
        <div className="nav__close hide" onClick={() => setShow(false)}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="nav__categories">
          {CATEGORIES.map((item) => {
            return (
              <li key={item + "-nav"} onClick={() => setShow(false)}>
                <Link href={`/products#${item}`}>{item}</Link>
              </li>
            );
          })}
        </ul>
        <Link href="/login">
          <a>
            <Button text="Login" onClick={() => setShow(false)} />
          </a>
        </Link>
      </div>
    </nav>
  );
}
