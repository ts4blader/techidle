import React, { useRef } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export default function Layout({ children }) {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 3,
        // ... all available Locomotive Scroll instance options
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div className="layout wrapper" ref={containerRef} data-scroll-container>
        {/* Navigation */}
        <Nav />
        {children}
        {/* Footer */}
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
}
