import './RandomFish.css'

import { useState , useEffect } from 'react';

//Build Navbar Component
function RandomFish() {
    //Assign Variables
    const [ data , setData ] = useState([])
    const [ toggle , setToggle ] = useState(false)

    let randomNum = Math.floor(Math.random() * data.length)

    console.log(randomNum)
    useEffect(() => {
        fetch(`https://projecttwoapi-production.up.railway.app/api/fish`)
        .then(res => res.json())
        .then(data => setData(data))
      }, []); 
    // console.log(data)


    
    if (!data[randomNum]) return <h1>Loading…</h1>;
    
    let speciesName = data[randomNum]["Species Name"]
    let habitat = data[randomNum]['Habitat']
    if (habitat !== null) {
        habitat = habitat.replaceAll("<ul>", "")
        habitat = habitat.replaceAll("</ul>", "")
        habitat = habitat.replaceAll("<li>", "")
        habitat = habitat.replaceAll("</li>", "")
        habitat = habitat.replaceAll("&nbsp", "")
        habitat = habitat.replaceAll("<em>", "")
        habitat = habitat.replaceAll("</em>", "")
        habitat = habitat.replaceAll(";", "")
        habitat = habitat.replaceAll("<a href=", "")
        habitat = habitat.replaceAll("</a", "")
        habitat = habitat.replaceAll(">", "")
    } else {
        habitat = "Data Unavailable"
    }

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