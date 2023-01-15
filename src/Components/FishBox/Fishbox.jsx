import './Fishbox.css'
import { useEffect , useState } from 'react'
import FishBoxModal from '../FishBoxModal/FishBoxModal.jsx'

//Build Navbar Component
function FishBox() {
    const [ data , setData ] = useState([])
    //Lifted States for FishBoxModal
    const [modalOpen, setModalOpen] = useState(false);
    // const [modalData, setModalData] = useState(null);



    useEffect(() => {
        fetch(`https://projecttwoapi-production.up.railway.app/api/fish`)
        .then(res => res.json())
        .then(data => setData(data))
    }, []);      
    console.log(data)
    

    return (   
        <>
            <div className='FishBox'>
                <div className='FishList'>
                    {data.map((item, index) => {
                        return (
                            <button key={index} className='FishListItem' onClick={() => setModalOpen(true)} >
                                {item["Species Name"]}
                            </button>
                        )
                    })}
                </div>
            </div>
            <FishBoxModal onClose={() => setModalOpen(false)} modalOpen={modalOpen}/>
        </>
    );
}
//Export Component
export default FishBox