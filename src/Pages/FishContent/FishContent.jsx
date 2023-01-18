//Imports
import './FishContent.css'
import FishBox from '../../Components/FishBox/Fishbox.jsx'
//Build Navbar Component
function FishContent({data}) {
    //Assign Variables
    return (   
        <>
            <div className='FishContentContainer'>
                <div className='Fishies'>
                    <FishBox data={ data }/>
                </div>
            </div>
        </>
    );
}
//Export Component
export default FishContent