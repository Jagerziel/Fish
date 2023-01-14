//Imports
import './Navbar.css'
import DataDL from './DataDL.jsx'
import { useState } from 'react';
import { Link } from 'react-router-dom';

//Build Navbar Component
function Navbar() {
    return (   
        <>
            <div className='NavbarContainer'>
                <DataDL />
                <div className='NavRight'>
                    <Link to={`/`} className="Links">Home</Link>
                    <Link to={`/random-fish`} className="Links">Random Fish</Link>
                    <Link to={`/fish`} className="Links">More Fish!</Link>
                </div>
            </div>
        </>
    );
}
//Export Component
export default Navbar