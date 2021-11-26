import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Icon from "./Icon";
import Image from "next/image";

const Item = ({ data }) => {
  return (
    <div className="glide__slide">
      <div className="backdrop"></div>
      <div className="content">
        <Image src={data.img} alt={data.name} width={70} height={70} />
        <div className="name">{data.name}</div>
      </div>
    </div>
  );
};

export default function Carousel({ data = [], options = {} }) {
  useEffect(() => {
    const glide = new Glide(".glide", options);
    glide.mount();
  }, []);

  return (
    <div className="glide carousel">
      {/* Control */}
      <div data-glide-el="controls">
        <div className="control hide-on-sm prev" data-glide-dir="<">
          <Icon src="arrow.png" alt="prev" />
        </div>
        <div className="control hide-on-sm next" data-glide-dir=">">
          <Icon src="arrow.png" alt="next" />
        </div>
      </div>
      {/* End Control */}
      <div className="glide__track" data-glide-el="track">
        {/* Slides */}
        <ul className="glide__slides">
          {data.map((item) => {
            return <Item data={item} key={item.name} />;
          })}
        </ul>
        {/* End Slides */}
      </div>
    </div>
  );
}
