//Imports
import './Navbar.css'
import DataDL from './DataDL.jsx'
import { useState } from 'react';

//Build Navbar Component
function Navbar() {
    //Assign Variables

    return (   
        <>
            <div className='NavbarContainer'>
                <DataDL />
            </div>
        </>
    );
}
//Export Component
export default Navbar