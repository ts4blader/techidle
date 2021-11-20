import React from "react";

export default function SectionTitle({ text }) {
  return (
    <div className="section-title container">
      <h3 className="title">{text}</h3>
      <div className="bar"></div>
    </div>
  );
}