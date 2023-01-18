//Imports
import './Navbar.css'
import DataDL from './DataDL.jsx'
import { Link } from 'react-router-dom';

//Build Navbar Component
function Navbar({setToggle}) {
    return (   
        <>
            <div className='NavbarContainer'>
                <DataDL />
                <div className='NavRight'>
                    <Link to={`/`} className="Links">Home</Link>
                    <Link to={`/random-fish`} onClick={()=> setToggle(prev => !prev)} className="Links" >Random Fish</Link>
                    <Link to={`/fish`} className="Links">More Fish!</Link>
                </div>
            </div>
        </>
    );
}
//Export Component
export default Navbar