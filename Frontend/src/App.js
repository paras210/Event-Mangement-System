import './App.css';
import EventList from './components/EventList';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listevent" element={<EventList />} />
        
      </Routes>
    </Router>
  );
}

export default App;