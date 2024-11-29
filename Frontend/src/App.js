import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Para from './components/Para';
import Services from './components/Services';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Intro/>
      <Para/>
      <Features/>
      <Gallery/>
      <Services/>
      <Footer/>
      <Routes>
        
      </Routes>
    </Router>
  );
}

export default App;
