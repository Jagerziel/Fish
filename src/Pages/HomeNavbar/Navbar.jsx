//Imports
import './Navbar.css'
import DataDL from './DataDL.jsx'
import { useState } from 'react';
import { Link } from 'react-router-dom';

//Build Navbar Component
function Navbar(props) {
    //Assign Variables
    const { data , setData } = props


    return (   
        <>
            <div className='NavbarContainer'>
                <DataDL data={data} setData={setData}/>
                <div className='NavRight'>
                    <Link to={`/`} className="Links">Home</Link>
                    <Link to={`/fish`} className="Links">More Fish!</Link>
                </div>
            </div>
        </>
    );
}
//Export Component
export default Navbar