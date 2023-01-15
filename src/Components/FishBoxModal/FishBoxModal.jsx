import './FishBoxModal.css'
import React from 'react';

//Build Navbar Component
function FishBoxModal({modalOpen , onClose}) {
    if (!modalOpen) {
        return null
    }

    return (
        <div className='FishBoxModalContainer'>
            <div className='FishBoxModalBox'>
                    <div className='ModalHeader'>
                        <h4>TESTING</h4>
                        <button className='CloseModal' onClick={onClose}>X</button>
                    </div>
                    <div className='ModalBody'>
                        <p>BODY CONTENT</p>
                    </div>
                    <div className='ModalFooter'>
                    </div>
            </div>
        </div> 
    )
}

//Export Component
export default FishBoxModal


