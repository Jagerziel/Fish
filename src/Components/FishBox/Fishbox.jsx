//Imports
import './Fishbox.css'
import { useEffect , useState } from 'react'
import FishBoxModal from '../FishBoxModal/FishBoxModal.jsx'

//Build Navbar Component
function FishBox() {
    const [ data , setData ] = useState([])
    //Lifted States for FishBoxModal
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    //API Pull
    useEffect(() => {
        fetch(`https://projecttwoapi-production.up.railway.app/api/fish`)
        .then(res => res.json())
        .then(data => setData(data))
    }, []); 
    //Console-Log Test Output
//   console.log(data)
    //Ensure loading in correct order
    if (data.length === 0) return <h1>Loading…</h1>;
    //Set item on click for modal
    const modelOp = (item) => {
        setModalOpen(true)
        setModalData(item)
        console.log(item)
    }
    return (   
        <>
            <div className='FishBox'>
                <div className='FishList'>
                    {/* map data */}
                    {data.map((item, index) => {
                        return (
                            <button key={index} className='FishListItem' onClick={() => modelOp(item)} >
                                {item["Species Name"]}
                            </button>
                        )
                    })}
                </div>
            </div>
        {/* Set Fishbox Modal */}
        {modalOpen && <FishBoxModal onClose={() => setModalOpen(false)} modalData={modalData}/>}
        </>
    );
}
//Export Component
export default FishBox









