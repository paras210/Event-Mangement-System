import React, { useState } from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Features from "./Features";
import Gallery from "./Gallery";
import Para from "./Para";
import Services from "./Services";
import Footer from "./Footer";
import LoginModal from "./LoginModal";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <Navbar onLoginClick={handleLoginOpen} />
      {/* Wrap only the sections you want to blur */}
      <div className={isLoginOpen ? "blurred" : ""}>
        <Intro />
        <Para />
        <Features />
        <Gallery />
        <Services />
        <Footer />
      </div>
      {/* Show LoginModal */}
      {isLoginOpen && <LoginModal onClose={handleLoginClose} />}
    </>
  );
}
