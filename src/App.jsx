import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import Navbaar from "./Components/Navbaar";
import Caarousel from "./Components/Caarousel";
import Caarousel1 from "./Components/Caarousel1";
import Caarousel2 from "./Components/Caarousel2";
import Sideimg from "./Components/Sideimg";
import Sideimg1 from "./Components/Sideimg1";
import Sideimg2 from "./Components/Sideimg2";
import Footer from "./Components/Footer";

import LoginSignup from "./Pages/LoginSignup/LoginSignup";


const Home = () => (
  <>
    <Caarousel />
    <Caarousel1 />
    <Caarousel2 />
    <Sideimg />
    <Sideimg1 />
    <Sideimg2 />
  </>
);

const App = () => {
  return (
    <>
      <Navbaar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
