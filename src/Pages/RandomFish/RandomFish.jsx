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
    let habitat = data[randomNum]['Habitat'] === null ? "Information Unavailable from API" : data[randomNum]['Habitat']
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