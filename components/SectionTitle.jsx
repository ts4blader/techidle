import React from "react";
import Icon from "./Icon";

export default function SectionTitle({ text, foldable = false, fold = false }) {
  return (
    <div className="section-title" data-fold={fold}>
      <div className="section-title__head">
        <h3 className="title">{text}</h3>
        {foldable && (
          <div className="title-dropdown">
            <Icon src="close.png" alt="dropdown" />
          </div>
        )}
      </div>
      <div className="bar"></div>
    </div>
  );
}
