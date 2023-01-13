//Import CSS
import './Content.css'
//Import Modules
import { useState , useEffect } from 'react';
import parse from 'html-react-parser';

//Build Navbar Component
function Content(props) {
    const { data , setData } = props

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
    // habitat = habitat.replaceAll("</li>", "") !== null ? habitat.replaceAll("</li>", "") : habitat
    // habitat = habitat.replaceAll("</li>", "") !== null ? habitat.replaceAll("</li>", "") : habitat
    


    //Assign Variables
    return (   
        <>

            <div className='ContentContainer'>
                {/* Content for Home Page */}
                {speciesName && <h3 className='HomeHeader'>{speciesName}</h3>}
                {habitat && <p className='HomeContent'>{habitat}</p>}
            </div>
        </>
    );
}
//Export Component
export default Content