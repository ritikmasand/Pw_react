import React from "react";
import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <nav style={{ padding: "1rem", display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default MainLayout;
