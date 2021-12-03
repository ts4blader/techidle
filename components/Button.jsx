import React from "react";
import Icon from "./Icon";

export default function Button({ text, img, type, align, onClick }) {
  return (
    <div
      className="button"
      data-type={type}
      data-align={align}
      onClick={onClick}
    >
      {text && <p className="text">{text}</p>}
      {img && <Icon src={img} />}
    </div>
  );
}
