import React from "react";

function Container() {
  return (
    <div className="@container">
      <div className="text-black @sm:bg-green-700 @md:bg-purple-700 @xs:bg-amber-500">
        Resize me based on my parent width
      </div>
    </div>
  );
}

export default Container;
