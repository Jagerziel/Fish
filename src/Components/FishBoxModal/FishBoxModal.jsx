import './FishBoxModal.css'
import React from 'react';

//Build Navbar Component
function FishBoxModal(props) {
    //Assign Variables

    return (
        <div className='FishBoxModalContainer'>
            <div className='FishBoxModalBox'>
                <div className='ModalHeader'>
                    <h2>TESTING</h2>
                </div>
                <div className='ModalBody'>
                    <p>BODY CONTENT</p>
                </div>
                <div>
                    <button className='CloseModal'>X</button>
                </div>
            </div>
        </div> 
    )
}

//Export Component
export default FishBoxModal


