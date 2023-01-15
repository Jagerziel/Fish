import './Fishbox.css'
import { useEffect , useState } from 'react'
import FishBoxModal from '../FishBoxModal/FishBoxModal.jsx'

//Build Navbar Component
function FishBox() {
    const [ data , setData ] = useState([])
    //Lifted States for FishBoxModal
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    useEffect(() => {
        fetch(`https://projecttwoapi-production.up.railway.app/api/fish`)
        .then(res => res.json())
        .then(data => setData(data))
    }, []); 

  console.log(data)
    
    if (data.length === 0) return <h1>Loading…</h1>;
  
    const modelOp = (item) => {
        setModalOpen(true)
        setModalData(item)
        console.log(item)
    }

    return (   
        <>
            <div className='FishBox'>
                <div className='FishList'>
                    {data.map((item, index) => {
                        return (
                            <button key={index} className='FishListItem' onClick={() => modelOp(item)} >
                                {item["Species Name"]}
                            </button>
                        )
                    })}
                </div>
            </div>
        {modalOpen && <FishBoxModal onClose={() => setModalOpen(false)} modalData={modalData}/>}
        </>
    );
}
//Export Component
export default FishBox









