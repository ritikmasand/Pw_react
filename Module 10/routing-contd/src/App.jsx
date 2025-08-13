import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import MainLayout from "./componets/MainLayout";
import Home from "../../routing/src/components/Home";
import Data from "./pages/Data";
import GreetUser from "./componets/GreetUser";
import Login from "./componets/Login";
import Dashboard from "./componets/Dashboard";
import ProtectedRoute from "./componets/ProtectedRoute";
// import { Outlet, Route, Routes } from "react-router-dom";

function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* This is acting as a wrapper Route*/}
          <Route index element={<Home />} />

          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="/data/:UserID?" element={<Data />}></Route>
          <Route path="/greet" element={<GreetUser />}></Route>
          <Route path="*" element={<h1>❌ 404 Page Not Found...</h1>}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<ProtectedRoute isLoggedIn={isLoggedIn}> 
            <Dashboard/>
          </ProtectedRoute>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
