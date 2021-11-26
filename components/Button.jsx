import React from "react";
import Icon from "./Icon";
import { useRouter } from "next/router";

export default function Button({ text, img, type, link, align }) {
  const router = useRouter();

  const handleClick = () => {
    if (!link) return;
    router.push(link);
  };

  return (
    <div
      className="button"
      data-type={type}
      data-align={align}
      onClick={handleClick}
    >
      {text && <p className="text">{text}</p>}
      {img && <Icon src={img} />}
    </div>
  );
}
