import React, { useState } from "react";

function LiveInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h3>You typed: {text}</h3>
    </div>
  );
}

export default LiveInput;
