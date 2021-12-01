import React, { useState, useEffect, useRef } from "react";
import {
  useRive,
  Layout,
  Fit,
  Alignment,
  useStateMachineInput,
} from "rive-react";

const logo = "TechIdle";

export default function Loader() {
  const [loaded, setLoaded] = useState(false);
  const [complete, setComplete] = useState(false);
  const loader = useRef(null);

  const { RiveComponent, rive } = useRive({
    src: "/images/rive/bouncing_ti.riv",
    artboard: "TechIdle",
    stateMachines: "Loading",
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  const onLoadInput = useStateMachineInput(rive, "Loading", "loaded");

  useEffect(() => {
    window.onload = () => {
      setLoaded(true);
    };
  }, []);

  return (
    <div
      ref={loader}
      className="loader"
      onClick={() => {
        onLoadInput.fire();
        setComplete(true);
        setTimeout(() => {
          loader.current.style.display = "none";
        }, 5000);
      }}
      data-complete={complete}
    >
      <p>{loaded ? "Click or touch to enter" : "Loading..."}</p>
      <div className="logo">
        {logo.split("").map((item, i) => (
          <span className={`char char-${i} delay-${i}`} key={item + "char" + i}>
            {item}
          </span>
        ))}
      </div>
      {/* implement Rive animation  */}
      <RiveComponent />
    </div>
  );
}
