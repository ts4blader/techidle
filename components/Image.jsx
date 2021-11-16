import React from "react";

function Image({ src, alt = "" }) {
  return (
    <div className="img">
      <img src={`/images/${src}`} alt={alt} />
    </div>
  );
}

export default Image;
