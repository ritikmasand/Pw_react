import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      This is Nav Page
      <Link to="/home">
        <button>Home </button>
      </Link>
      <Link to="/contact">
        <button>Contact </button>
      </Link>
      <Link to="/about">
        <button>About </button>
      </Link>
    </>
  );
}

export default Nav;
