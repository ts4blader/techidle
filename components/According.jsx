import React, { useState } from "react";
import Icon from "./Icon";

export default function According({ data }) {
  const { question, answer } = data;
  const [show, setShow] = useState(true);

  return (
    <div className="according" data-show={show}>
      <div className="according__head" onClick={() => setShow((prev) => !prev)}>
        <div className="question">{question}</div>
        <div className="caret">
          <Icon src="right-arrow.png" alt="caret" />
        </div>
      </div>
      <div className="according__body">
        <div className="answer">{answer}</div>
      </div>
    </div>
  );
}
