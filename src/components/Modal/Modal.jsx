import React from 'react'
import {useState} from 'react'
import './Modal.css'
import Form from '../../components/Form/Form'

export default function Modal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
    <>
    <button onClick={toggleModal}
    className="btn-modal">Add</button>
    
    {modal &&
    <div className="overlay">
        <div className="modal">
            <div className="modal-content">
                <Form/>
                <button onClick={toggleModal} className="close-modal"></button>
            </div>
        </div>
    </div>
    }   
    </>
  )
}
