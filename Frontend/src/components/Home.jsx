import React, { useState } from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Features from "./Features";
import Gallery from "./Gallery";
import Para from "./Para";
import Services from "./Services";
import Footer from "./Footer";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignOpen, setIsSignOpen] = useState(false);

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  const handleSignOpen = () => {
    setIsSignOpen(true);
  };

  const handleSignClose = () => {
    setIsSignOpen(false);
  };

  return (
    <div>
      <div className={isLoginOpen || isSignOpen ? "blurred-content" : ""}>
        <Navbar onLoginClick={handleLoginOpen} onSignClick={handleSignOpen} />
        <Intro />
        <Para />
        <Features />
        <Gallery />
        <Services />
        <Footer />
      </div>

      {isLoginOpen && <LoginModal onClose={handleLoginClose} />}
      {isSignOpen && <SignupModal onClose={handleSignClose} />}
    </div>
  );
}
