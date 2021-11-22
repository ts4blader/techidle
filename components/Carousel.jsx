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

export default function Carousel({ data = [] }) {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      perView: 4,
      gap: 50,
      autoplay: 10000,
      hoverpause: true,
      peek: {
        before: 100,
        after: 100,
      },
    });
    glide.mount();
  }, []);

  return (
    <div className="container">
      <div className="glide carousel">
        {/* Control */}
        <div data-glide-el="controls">
          <div className="control prev" data-glide-dir="<">
            <Icon src="arrow.png" alt="prev" />
          </div>
          <div className="control next" data-glide-dir=">">
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
    </div>
  );
}
