import './App.css';
import EventList from './components/EventList';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';


function App() {

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listevent" element={<EventList />} />
        <Route path="/main" element={<MainPage />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;