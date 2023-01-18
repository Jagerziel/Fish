//Import CSS
import './RandomFish.css'
//Import React
import { useState , useEffect } from 'react';
import { useLocation } from "react-router-dom";

//Build Navbar Component
function RandomFish(props) {
    const { data } = props
    let randomNum = Math.floor(Math.random() * data.length)
    if (!data[randomNum]) return <h1>Loading…</h1>;
    // console.log(data[randomNum]["Species Name"])
    let speciesName = data[randomNum]["Species Name"]
    let habitat = data[randomNum]['Habitat'] === null ? "Information Unavailable from API" : data[randomNum]['Habitat']
    
    // const [ randNum , setRandNum ] = useState(null)
    // function randomize () {
    //     setRandNum(Math.floor(Math.random() * data.length)) 
    // }


    //Assign Variables
    // const location = useLocation();
    // const [ data , setData ] = useState([])
    // let randomNum = Math.floor(Math.random() * data.length)
    // //Pull API Data
    // useEffect(() => {
    //     fetch(`https://projecttwoapi-production.up.railway.app/api/fish`)
    //     .then(res => res.json())
    //     .then(data => setData(data))
    //   }, [location]);
    // //Test Data Pull 
    // // console.log(data)
    // //Ensure Component Loads in Order
    // if (!data[randomNum]) return <h1>Loading…</h1>;
    // //Set Variables and Clean Data
    // let speciesName = data[randomNum]["Species Name"]
    // let habitat = data[randomNum]['Habitat']
    // if (habitat !== null) {
    //     habitat = habitat.replaceAll("<ul>", "")
    //     habitat = habitat.replaceAll("</ul>", "")
    //     habitat = habitat.replaceAll("<li>", "")
    //     habitat = habitat.replaceAll("</li>", "")
    //     habitat = habitat.replaceAll("&nbsp", "")
    //     habitat = habitat.replaceAll("<em>", "")
    //     habitat = habitat.replaceAll("</em>", "")
    //     habitat = habitat.replaceAll(";", "")
    //     habitat = habitat.replaceAll("<a href=", "")
    //     habitat = habitat.replaceAll("</a", "")
    //     habitat = habitat.replaceAll(">", "")
    // } else {
    //     habitat = "Information Unavailable from API"
    // }
    //Assign Variables
    return (   
        <>

            <div className='RandomFishContainer'>
                {/* Content for Home Page */}
                {speciesName && <h3 className='FishHeader'>{speciesName}</h3>}
                {habitat && <p className='FishContent'>{habitat}</p>}
            </div>
        </>
    );
}



//Export Component
export default RandomFish