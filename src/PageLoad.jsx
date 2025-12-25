import React, { useEffect } from "react";

function PageLoad() {

  useEffect(() => {
    console.log("Page loaded successfully");
  }, []); // empty dependency array → runs only once

  return (
    <h2>Check the console</h2>
  );
}

export default PageLoad;
