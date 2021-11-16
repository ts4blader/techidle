import React from "react";
import Icon from "./Icon";

export default function Button({ text, img, type }) {
  return (
    <div className="button" data-type={type}>
      {text && <p className="text">{text}</p>}
      {img && <Icon src={img} />}
    </div>
  );
}
