import React from "react";
import Nav from "./Nav";
import Button from "./Button";
import Footer from "./Footer";

export default function Layout({ children }) {
  const onTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="layout">
      {/* Navigation */}
      <Nav />
      {/* On top button */}
      <div className="ontop-button" onClick={onTop}>
        <Button img="purple-arrow.png" />
      </div>
      {children}
      <Footer />
    </div>
  );
}
