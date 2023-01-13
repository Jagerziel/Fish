//Import CSS
import './App.css';
//Import Components
import Navbar from './Pages/HomeNavbar/Navbar.jsx';
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='MainContent'>
        <Routes>
          {/* <Route path="/" element={<h2>Home!</h2>}/> */}
        </Routes> 
      </div>
    </div>
  );
}

export default App;
