//Import CSS
import './App.css';
//Import Components
import Navbar from './Pages/HomeNavbar/Navbar.jsx';
import Content from './Pages/HomeContent/Content.jsx'
import FishContent from './Pages/FishContent/FishContent.jsx';
import RandomFish from './Pages/RandomFish/RandomFish.jsx';
//Import Routes
import { Routes , Route , useLocation } from "react-router-dom";
//React Redux
import { createStore } from 'react-redux'
//React
import  React, { useState , useEffect , createContext , useContext } from 'react';

const FishDataContext = React.createContext();

function App() {
  //Set global useStates
  const [ data , setData ] = useState([])
  const [toggle, setToggle] = useState(false)
  //API Call for fish data  
  useEffect(() => {
    fetch(`https://projecttwoapi-production.up.railway.app/api/fish`)
    .then(res => res.json())
    .then(data => {
      //Maps the data with the new object and cleaned data
      let fishData = data.map((fish) => {
        //Returns object with cleaned data
        return {
          "Species Name": fish["Species Name"],
          Habitat: filterHtmlTags(fish.Habitat)
        }
      });
      //Sets cleaned data
      setData(fishData)
    })
  }, []);
  /*Test Data Pull*/ 
  // console.log(data)
  //Filter out tags included in data
  function filterHtmlTags (info) {
    const [string] = [info];
    //Texts to exclude
    const exclude = ['<ul>','</ul>','<li>','</li>','<p>', '</p>','<em>','</em>',';','<a href=','</a','&nbsp','>'];
    //Set initial variable state to null
    let result = null;
    if (string == null) {
      return result
    } else {
      result = exclude.reduce((str, word) => 
        //removes each item in exclude array as well as any extra spaces (and replaces with only one space)
        str.replaceAll(word, ''), string).replaceAll(/\s+/g, ' ');
      return result
    }
  }
  let data2 = JSON.stringify(data)
  // console.log(data)
  return (
    <div className="App" id="root">
      <Navbar setToggle={setToggle}/>
      <div className='MainContent'>
        <FishDataContext.Provider value={ data2 }>
          <Routes>
              <Route path="/" element={<Content />}/>
              <Route path="/fish" element={<FishContent data={ {data} }/>}/>
              <Route path="/random-fish" element={<RandomFish />}/>
          </Routes> 
        </FishDataContext.Provider>
      </div>
    </div>
  );
}
//Export App
export default App;
