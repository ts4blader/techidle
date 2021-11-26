import React, { useState, useEffect } from "react";

export default function useClientWidth() {
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    setClientWidth(window.innerWidth);
  }, []);

  return { clientWidth };
}
