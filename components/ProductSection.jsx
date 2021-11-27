import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "../components/SectionTitle";

export default function ProductSection({ title, data = [] }) {
  const [fold, setFold] = useState(false);

  return (
    <section
      className={`container ${title}-section product-section`}
      id={title}
      data-fold={fold}
    >
      {/* Product Section */}
      <div className="title-wrapper" onClick={() => setFold((state) => !state)}>
        <SectionTitle text={title} foldable={true} fold={fold} />
      </div>
      <ul className="products">
        {data.map((item) => (
          <li key={item.name} className="item">
            <Image src={item.img} alt={item.name} width="70" height="70" />
            <p className="name">{item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
