import React from "react";
import Image from "next/image";

export default function ProductShow({ data = [] }) {
  return (
    <div className="product-show container">
      <ul className="product-list">
        {data.map((item, index) => {
          return (
            <li key={item.name} className={`item item-${index}`}>
              <Image src={item.img} alt="show" width="1920" height="770" />
              <div className="name">{item.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
