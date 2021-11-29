import React from "react";
import {
  useRive,
  Layout,
  Fit,
  Alignment,
  useStateMachineInput,
} from "rive-react";

export default function Loader() {
  const { RiveComponent, rive } = useRive({
    src: "/images/rive/bouncing_ti.riv",
    stateMachines: "Loading",
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  const onLoadInput = useStateMachineInput(rive, "Loading", "loaded");

  return (
    <div className="loader">
      {/* implement Rive animation  */}
      <RiveComponent />
    </div>
  );
}
