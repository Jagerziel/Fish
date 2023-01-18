//Import CSS
import './FishContent.css'
//Import Fishbox Component
import FishBox from '../../Components/FishBox/Fishbox.jsx'
//Build Navbar Component
function FishContent() {
    //Assign Variables
    return (   
        <>
            <div className='FishContentContainer'>
                <div className='Fishies'>
                    <FishBox />
                </div>
            </div>
        </>
    );
}
//Export Component
export default FishContent