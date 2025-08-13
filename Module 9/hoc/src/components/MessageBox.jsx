import React from "react";

function MessageBox({ children }) {
  const isHappy = true;
  return (
    <div>
      {children(isHappy)}
    </div>
  );
}

export default MessageBox;
