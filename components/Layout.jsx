import React, { useRef } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const containerRef = useRef(null);
  const { asPath } = useRouter();
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 3,
        // ... all available Locomotive Scroll instance options
      }}
      watch={[asPath]}
      location={asPath}
      containerRef={containerRef}
      onLocationChange={(scroll) => {
        scroll.scrollTo(0, { duration: 0, disableLerp: true });
      }}
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
