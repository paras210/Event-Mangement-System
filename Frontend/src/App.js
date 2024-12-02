import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './EventList';

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