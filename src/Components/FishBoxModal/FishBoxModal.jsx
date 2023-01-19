//Import CSS
import './FishBoxModal.css'

//Build Navbar Component
function FishBoxModal({ onClose, modalData }) {
    //Clean Data
    let physDesc = modalData['Physical Description'] !== null ? modalData['Physical Description'] : "Information Unavailable from API"
    let habitat = modalData['Habitat'] !== null ? modalData['Habitat'] : "Information Unavailable from API"
    let popStatus = modalData['Population Status'] !== null ? modalData['Population Status'] : "Information Unavailable from API"

    return (
        <div className='FishBoxModalContainer'>
            <div className='FishBoxModalBox'>
                    {/* Modal Structure and Styling */}
                    <div className='ModalHeader'>
                        <h4>{modalData["Species Name"]}</h4>
                        <button className='CloseModal' onClick={onClose}>X</button>
                    </div>
                    <div className='ModalBody'>
                        <p><span id="RF1">Physical Description: </span>{physDesc}</p>
                        <p><span id="RF1">Habitat: </span>{habitat}</p>
                        <p><span id="RF1">Population Status: </span>{popStatus}</p>
                    </div>
                    <div className='ModalFooter'>
                    </div>
            </div>
        </div> 
    )
}

//Export Component
export default FishBoxModal

