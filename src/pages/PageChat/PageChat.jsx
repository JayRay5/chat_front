import React, { useState, useEffect } from 'react';
import Topbar from '../../components/Topbar/Topbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormUser from '../../components/FormUser/FormUser';
import './PageChat.css';

import { get_chats } from '../../utils/api';

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
        <>
            <Topbar nameBtn={"Add User"} onClick={handleModal} />
            <div className="bottom-bar">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Aa"
                />
                <Button onClick={handleButtonClick}></Button>
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
        </>
    )
}
export default PageChat;