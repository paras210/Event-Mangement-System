import React from 'react'
import Navbar from './Navbar';
import Intro from './Intro';
import Features from './Features';
import Gallery from './Gallery';
import Para from './Para';
import Services from './Services';
import Footer from './Footer';

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Para/>
        <Features/>
        <Gallery/>
        <Services/>
        <Footer/>

      
    </div>
  )
}
