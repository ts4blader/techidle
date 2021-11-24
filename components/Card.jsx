import React from "react";

export default function Card({ data, number }) {
  const { bg, title, description, date } = data;

  const style = {
    background: `url("/images/customers/${bg}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <div className="card" style={style}>
      <div className="card__content">
        <div className="top">
          <p className="number">{number < 10 ? `0${number}` : number} </p>
          <p className="date">{date}</p>
        </div>
        <h4 className="title container">{title}</h4>
        <p className="description container">{description}</p>
      </div>
    </div>
  );
}
