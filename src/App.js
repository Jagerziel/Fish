//Import CSS
import './App.css';
//Import Components
import Navbar from './Pages/HomeNavbar/Navbar.jsx';
import Content from './Pages/HomeContent/Content.jsx'
import FishContent from './Pages/FishContent/FishContent.jsx';
import RandomFish from './Pages/RandomFish/RandomFish.jsx';
//Import Routes
import { Routes , Route } from "react-router-dom";
import { useState , useEffect } from 'react';
import { createStore } from 'react-redux'
import parse from 'html-react-parser';

function App() {
  const [ toggleRand, setToggleRand ] = useState(false)
  console.log(toggleRand)
  return (
    <div className="App">
      <Navbar />
      <div className='MainContent'>
        <Routes>
          <Route path="/" element={<Content />}/>
          <Route path="/fish" element={<FishContent />}/>
          <Route path="/random-fish" element={<RandomFish />}/>
        </Routes> 
      </div>
    </div>
  );
}

export default App;
