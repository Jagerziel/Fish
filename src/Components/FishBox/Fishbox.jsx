//Import CSS
import './Fishbox.css'
//Import React
import { useEffect , useState , useContext } from 'react'
//Import Components
import FishBoxModal from '../FishBoxModal/FishBoxModal.jsx'
//Import Context
import { FishDataContext } from '../../App'

//Build Navbar Component
function FishBox() {
    //Access Context
    const data = useContext(FishDataContext)
    //Lifted States for FishBoxModal
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    //Set information to be used in modal
    const modelOp = (item) => {
        setModalOpen(true)
        setModalData(item)
    }
    //Ensure proper load
    if (data.length === 0) return <h1>Loading…</h1>;

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









