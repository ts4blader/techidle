import React from "react";

function Icon({ src, alt = "" }) {
  return (
    <div className="icon">
      <img src={`/icons/${src}`} alt={alt} />
    </div>
  );
}

export default Icon;
