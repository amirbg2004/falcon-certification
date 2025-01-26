import React from "react";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import AskForAConsultant from "./pages/AskForAConsultant";
import OurPartners from "./pages/OurPartners";
import Login from "./pages/Login";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/our-partners" element={<OurPartners />}></Route>
        <Route path="/ask-for-a-consultant" element={<AskForAConsultant />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
