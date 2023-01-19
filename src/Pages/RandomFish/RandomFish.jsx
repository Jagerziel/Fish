//Import CSS
import './RandomFish.css'
//Import React
import { useContext } from 'react';
//Import Context
import { FishDataContext } from '../../App';

//Build Navbar Component
function RandomFish() {
    const data = useContext(FishDataContext)
    let randomNum = Math.floor(Math.random() * data.length)
    if (!data[randomNum]) return <h1>Loading…</h1>;
    // console.log(data[randomNum]["Species Name"])
    let speciesName = data[randomNum]["Species Name"]
    let physDesc = data[randomNum]['Physical Description'] === null ? "Information Unavailable from API" : data[randomNum]['Physical Description']
    let habitat = data[randomNum]['Habitat'] === null ? "Information Unavailable from API" : data[randomNum]['Habitat']
    let popStatus = data[randomNum]['Population Status'] === null ? "Information Unavailable from API" : data[randomNum]['Habitat']

    //Assign Variables
    return (   
        <>
            <div className='RandomFishContainer'>
                {/* Content for Home Page */}
                {speciesName && <h3 className='FishHeader'>{speciesName}</h3>}
                {physDesc && <p className='FishContent'><span id="RF1">Physical Description: </span>{physDesc}</p>}
                {habitat && <p className='FishContent'><span id="RF1">Habitat: </span>{habitat}</p>}
                {popStatus && <p className='FishContent'><span id="RF1">Population Status: </span>{popStatus}</p>}
            </div>
        </>
    );
}

//Export Component
export default RandomFish