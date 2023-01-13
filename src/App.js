//Import CSS
import './App.css';
//Import Components
import Navbar from './Pages/HomeNavbar/Navbar.jsx';
import Content from './Pages/HomeContent/Content.jsx'
//Import Routes
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='MainContent'>
        <Routes>
          <Route path="/" element={<Content />}/>
        </Routes> 
      </div>
    </div>
  );
}

export default App;
