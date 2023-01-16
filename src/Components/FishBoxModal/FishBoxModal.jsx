//Imports
import './FishBoxModal.css'
import React from 'react';

//Build Navbar Component
function FishBoxModal({onClose, modalData}) {
    //Clean Data
    let habitat = modalData['Habitat']
    if (habitat !== null) {
        habitat = habitat.replaceAll("<ul>", "")
        habitat = habitat.replaceAll("</ul>", "")
        habitat = habitat.replaceAll("<li>", "")
        habitat = habitat.replaceAll("</li>", "")
        habitat = habitat.replaceAll("&nbsp", "")
        habitat = habitat.replaceAll("<em>", "")
        habitat = habitat.replaceAll("</em>", "")
        habitat = habitat.replaceAll(";", "")
        habitat = habitat.replaceAll("<a href=", "")
        habitat = habitat.replaceAll("</a", "")
        habitat = habitat.replaceAll(">", "")
    } else {
        habitat = "Information Unavailable from API"
    }

    return (
        <div className='FishBoxModalContainer'>
            <div className='FishBoxModalBox'>
                    {/* Modal Structure and Styling */}
                    <div className='ModalHeader'>
                        <h4>{modalData["Species Name"]}</h4>
                        <button className='CloseModal' onClick={onClose}>X</button>
                    </div>
                    <div className='ModalBody'>
                        <p>{habitat}</p>
                    </div>
                    <div className='ModalFooter'>
                    </div>
            </div>
        </div> 
    )
}

//Export Component
export default FishBoxModal

