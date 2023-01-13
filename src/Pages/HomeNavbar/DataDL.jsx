import './DataDL.css'
import { useState , useEffect } from 'react';

//Build Navbar Component
function DataDL() {
    const [ data , setData ] = useState({})
    //Assign Variables
    useEffect(() => {
        fetch(`https://projecttwoapi-production.up.railway.app/api/fish`)
        .then(res => res.json())
        .then(data => setData(data))
    }, []);      
    console.log(data)
    



    return (   
        <>
            <div className='DataDL'>
                Fish
            </div>
        </>
    );
}
//Export Component
export default DataDL