import React, { useState, useEffect } from 'react';
import Topbar from '../../components/Topbar/Topbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormUser from '../../components/FormUser/FormUser';
import CardMessage from '../../components/CardMessage/CardMessage';
import './PageChat.css';

function PageChat() {
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        console.log(showModal)
        setShowModal(!showModal)
    }
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        // Envoyer
        console.log(inputValue);
    };

    return (
        <div className="page-container">
            <Topbar nameBtn={"Add User"} onClick={handleModal} />
            <CardMessage/>
            <div className="bottom-bar">
            <div className='containerInput'>
            <label htmlFor="inputValue"></label>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="chat"
                    placeholder="Aa"
                />
                </div>
                <Button className="inputChat-button" onClick={handleButtonClick}></Button>
            </div>
            <Modal show={showModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title className="title-modal" id="contained-modal-title-vcenter">
                        Add a user to Chat
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormUser />
                </Modal.Body>
                <Modal.Footer>
                    <Button className="button-modal" onClick={handleModal}>Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default PageChat;