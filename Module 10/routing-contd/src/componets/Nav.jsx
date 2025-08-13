import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const clicked = () => {
    
    navigate("/page2");
  };
  return (
    <>
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
      <Link to="/page3">Page 3</Link>
      <button onClick={clicked}>Page 2</button>
    </>
  );
}

export default Nav;
