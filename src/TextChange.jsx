import React, { useState } from "react";

function TextChange() {
  const [text, setText] = useState("Click the button");

  return (
    <div>
      <h2>{text}</h2>
      <button onClick={() => setText("Text changed using useState!")}>
        Click Me
      </button>
    </div>
  );
}

export default TextChange;
