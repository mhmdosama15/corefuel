import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StarterPage from "./components/StarterPage";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./pages/register/SignUp";
import Username from "./pages/register/Username";
import Home from "./pages/Home";
import MaybeShowComponent from "./components/MaybeShowComponent";
import Dashboard from "./pages/Dashboard";

function App() {
  const location = useLocation();
  return (
    <>
      <div
        className={`flex flex-col  2xl:mx-auto 2xl:container w-screen h-full pb-30`}
      >
        <MaybeShowComponent>
          <Navbar />
        </MaybeShowComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/starter" element={<StarterPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/username" element={<Username />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
