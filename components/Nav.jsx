import React from "react";
import Icon from "./Icon";
import { CATEGORIES } from "../constants/base";
import Button from "./Button";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav container">
      <div className="nav__logo">
        <Link href="/">
          <a>
            <Icon src="logo.png" alt="logo" />
          </a>
        </Link>
      </div>
      <ul className="nav__categories">
        {CATEGORIES.map((item) => {
          return (
            <li key={item}>
              <Link href={`/${item}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
      <Button text="Login" type="" />
      <div className="nav__user-pane"></div>
    </nav>
  );
}
