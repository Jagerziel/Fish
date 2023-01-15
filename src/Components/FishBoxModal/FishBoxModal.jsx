import './FishBoxModal.css'
import React from 'react';

//Build Navbar Component
function FishBoxModal({modalOpen , onClose , modalData , indexNo}) {
    if (!modalOpen) {
        return null
    }
    if (!modalData) return <h1>Loading…</h1>;

    
    // let speciesName = modalData[indexNo]["Species Name"]
    // let habitat = modalData[indexNo]['Habitat']
    // if (habitat !== null) {
    //     habitat = habitat.replaceAll("<ul>", "")
    //     habitat = habitat.replaceAll("</ul>", "")
    //     habitat = habitat.replaceAll("<li>", "")
    //     habitat = habitat.replaceAll("</li>", "")
    //     habitat = habitat.replaceAll("&nbsp", "")
    //     habitat = habitat.replaceAll("<em>", "")
    //     habitat = habitat.replaceAll("</em>", "")
    //     habitat = habitat.replaceAll(";", "")
    //     habitat = habitat.replaceAll("<a href=", "")
    //     habitat = habitat.replaceAll("</a", "")
    //     habitat = habitat.replaceAll(">", "")
    // } else {
    //     habitat = "Information Unavailable from API"
    // }

    return (
        <div className='FishBoxModalContainer'>
            <div className='FishBoxModalBox'>
                    <div className='ModalHeader'>
                        <h4>TEST</h4>
                        <button className='CloseModal' onClick={onClose}>X</button>
                    </div>
                    <div className='ModalBody'>
                        <p>TEST CONTENT</p>
                    </div>
                    <div className='ModalFooter'>
                    </div>
            </div>
        </div> 
    )
}

//Export Component
export default FishBoxModal


