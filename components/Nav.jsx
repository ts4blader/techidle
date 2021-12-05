import React, { useState } from "react";
import Icon from "./Icon";
import { CATEGORIES } from "../constants/base";
import { useRouter } from "next/router";
import Button from "./Button";
import Link from "next/link";
import { useStore, ACTION } from "../store/Store";

export default function Nav() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [state, dispatch] = useStore();

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
              <li
                key={item + "-nav"}
                onClick={() => {
                  setShow(false);
                  router.push("/products");
                  dispatch({ type: ACTION.SET_PRODUCT_SECTION, payload: item });
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <Button
          text="Login"
          onClick={() => {
            setShow(false);
            router.push("/login");
          }}
        />
      </div>
    </nav>
  );
}
