import React, { useEffect } from "react";

function Child({ value }) {
  useEffect(() => {
    console.log("Component has been updated");
  }, [value]);
  return <div>{value}</div>;
}

export default Child;
