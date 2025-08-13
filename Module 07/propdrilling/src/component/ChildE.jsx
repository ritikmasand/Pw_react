import React, { useContext } from "react";
import { contextMain } from "../context";
function ChildE() {
    const data = useContext(contextMain)
  return (
    <div>
      <h2>Child E</h2>
      {data}
      {/* <contextMain.Consumer>
        {value =>(
          <div>
            <h3>Coming directly from App.jsx</h3>
            {value}
          </div>
        )} */}
      {/* </contextMain.Consumer> */}
    </div>
  );
}

export default ChildE;
